const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.county()
        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    // const userAndCompany = [new User(), new Company()];
    const userAndCompany = {
        user: new User(),
        company: new Company()
    }
    res.json(userAndCompany);
});

const server = app.listen(port, () =>
    console.info(`Server is loaded, locked and running on port ${server.address().port}!`)
);
