#Step 0: Choose base
FROM cypress/included:10.9.0


WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npm install cypress
