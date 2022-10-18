#Step 0: Choose base
FROM cypress/included


WORKDIR /usr/src/app

COPY . .

RUN npm ci
