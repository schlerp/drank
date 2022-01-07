from typing import List
from requests import get
from bs4 import BeautifulSoup
from urllib3.util import parse_url
from json import JSONEncoder, dumps, dump

# from multiprocessing.pool import ThreadPool


class Recipe:
    def __init__(
        self,
        name: str = None,
        description: List[str] = None,
        ingredients: List[str] = None,
        steps: List[str] = None,
        imageUrl: str = None,
        imageDescription: str = None,
        source: str = None,
    ):
        self.name = name or ""
        self.description = description or []
        self.ingredients = ingredients or []
        self.steps = steps or []
        self.imageUrl = imageUrl or ""
        self.imageDescription = imageDescription or ""
        self.source = source or ""

    def toJson(self):
        return self.__dict__


class RecipeEncoder(JSONEncoder):
    def default(self, o):
        return o.toJson()


def extract_links(body: BeautifulSoup, allow_filters: List[str]):
    for link in body.find_all("a"):
        href = link.get("href")
        if any(allow_filter in href for allow_filter in allow_filters):
            yield href


def extract_name(body: BeautifulSoup) -> str:
    return body.find("h1", {"class": "heading__title"}).text


def extract_description(body: BeautifulSoup) -> List[str]:
    intro = body.find("div", {"class": "article-intro"})
    if intro:
        return [x.text.replace("\n", "").strip() for x in intro.find_all("p")]
    return []


def extract_ingredients(body: BeautifulSoup) -> List[str]:
    list_items = body.find_all("li", {"class": "structured-ingredients__list-item"})
    if list_items:
        return [x.find("p").text.replace("\n", "").strip() for x in list_items]
    return []


def extract_steps(body: BeautifulSoup) -> List[str]:
    list_items = body.find_all("li", {"class": "mntl-sc-block-group--LI"})
    if list_items:
        return [x.find("p").text.replace("\n", "").strip() for x in list_items]
    return []


def extract_image_url(body: BeautifulSoup) -> str:
    return body.find("img", {"class": "primary-image"}).get("src")


def extract_recipe(body: BeautifulSoup, url: str) -> Recipe:
    name = extract_name(body)
    print(name)
    return Recipe(
        name=name,
        description=extract_description(body),
        ingredients=extract_ingredients(body),
        steps=extract_steps(body),
        imageUrl=extract_image_url(body),
        imageDescription="a {}".format(name),
        source=parse_url(url).host,
    )


def crawl(start_urls: List[str], allow_filters: List[str] = []):
    urls: List[str] = start_urls
    visited_urls: List[str] = []
    scraped_recipes = []

    i = 0

    while urls:
        url = urls.pop()
        if url in visited_urls:
            continue
        resp = get(url)
        if resp.status_code in [400, 401, 403, 404, 500]:
            print("response status code:", resp.status_code)
            continue

        i += 1
        print(i)
        visited_urls.append(url)

        body = BeautifulSoup(resp.text)

        for href in extract_links(body, allow_filters):
            if href not in visited_urls:
                urls.append(href)

        try:
            name = extract_name(body)
            if name not in scraped_recipes:
                scraped_recipes.append(name)
                yield extract_recipe(body, url)
        except Exception as e:
            print(e)

        if i >= 500:
            break


if __name__ == "__main__":
    output_path = "./static/recipes.json"

    crawl_start_urls = [
        "https://www.liquor.com/cocktail-and-other-recipes-4779343",
    ]

    allow_filters = [
        "https://www.liquor.com/recipes",
    ]

    recipes = [
        x for x in crawl(start_urls=crawl_start_urls, allow_filters=allow_filters)
    ]

    with open(output_path, "w+") as f:
        dump(recipes, f, cls=RecipeEncoder)
