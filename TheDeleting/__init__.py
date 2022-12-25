import logging
import requests
import azure.functions as func
import json


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')
    response = requests.get("https://ragweedalertapi.azurewebsites.net/alerts/")
    return func.HttpResponse(json.dumps(response.json()))