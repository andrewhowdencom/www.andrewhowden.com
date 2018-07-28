#!/usr/bin/env bash

set -e

GOOGLE_CLOUD_VERSION=206.0.0
PATH=$PATH:$(pwd)/bin

# Defined in Travis
# GCR_PROJECT
# GCR_REGION
# KUBERNETS_CLUSTER

mkdir bin

# Install Google Cloud
wget "https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-${GOOGLE_CLOUD_VERSION}-linux-x86_64.tar.gz"
tar -xvf google-cloud-sdk-${GOOGLE_CLOUD_VERSION}-linux-x86_64.tar.gz

google-cloud-sdk/install.sh --additional-components bq core gsutil gcloud alpha beta kubectl --quiet

# Install node
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# Polymer
npm install polymer-cli
