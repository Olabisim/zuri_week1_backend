const   express = require('express'),
        joi = require('joi'),
        cors = require('cors'),
        app = express(),
        port = 7000;


const schema = joi.object({
        slackUsername: joi.string(),
        backend: joi.boolean(),
        age: joi.number(),
        bio: joi.string()
})


// CORS PROBLEM ALLOWING FRONTEND TO PROCESS HTTP METHODS

app.use(cors());

app.use(function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader(
                'Access-Control-Allow-Methods',
                'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        );

        // Request headers you wish to allow
        res.setHeader(
                'Access-Control-Allow-Headers',
                'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
        );

        next();
});

// CORS PROBLEM END


const data = { 
        slackUsername: "holabisii", 
        backend: true, 
        age: 22, 
        bio: "I am a driven software engineer with a passion for programming and solving difficult problems. Technology is something with which I've always felt a deep connection.I have a can-do anything frame of mind and also really enjoy leaning new things. I love helping and motivating others. I can create full stack apps from start to finish and really better at improving things. I talk at length to illustrate my point and also respect the perpective of others." 
}

const validateData = schema.validate(data)

app.get('/', (_, res) => {
        return res.json(validateData)
})

app.listen(port, () => {
        console.log('server is running on 7000')
})