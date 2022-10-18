#Step 0: Choose base
FROM cypress/included:3.4.0


WORKDIR /usr/src/app

COPY . .

RUN npm ci
