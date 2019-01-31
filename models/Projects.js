const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
	    type: String,
	},
    date: {
	    type: String,
	},
    pictures: [
	    {
            project_picture: {
                data: Buffer,
                contentType: String,
            }
	    }
    ],
    pic: {
        type: String
    },
    repository: {
        type: String
    },
    site: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    points: [
        {
            point: {
                type: String,
            }
        }
    ]
});

module.exports = Auth = mongoose.model('project', ProjectSchema);