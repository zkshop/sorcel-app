#!/bin/bash

gcloud functions deploy nodejs-http-function --gen2 \
    --runtime=nodejs20 \
    --region=$GCP_REGION \
    --source=. \
    --entry-point=helloGET \
    --trigger-http \
    --memory=256MB \
    --max-instances=83