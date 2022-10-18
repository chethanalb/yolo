#Step 0: Choose base
FROM cypress/base


WORKDIR /usr/src/app

COPY . .

RUN npm ci
