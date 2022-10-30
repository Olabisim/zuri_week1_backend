const   express = require('express'),
        joi = require('joi'),
        app = express(),
        port = 7000;


const schema = joi.object({
        slackUsername: joi.string(),
        backend: joi.boolean(),
        age: joi.number(),
        bio: joi.string()
})


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