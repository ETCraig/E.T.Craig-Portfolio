const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
	    type: String,
	    required: true
	},
    date: {
	    type: String,
	    required: true
	},
    pictures: [
	    {
            project_picture: {
                data: Buffer,
                contentType: String
            }
	    }
    ],
    repo: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
    },
    points: [
        {
            point: {
                type: String
            }
        }
    ]
});

module.exports = Auth = mongoose.model('project', ProjectSchema);