var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	created: { type: Number, default: Date.now() },
	imgUrl:{type:String, required:true},
	count:{type:Number},
	public:{type:Boolean, default:false},
	// Relations
	// private:{type:Boolean, require:true, default:true},
	vaultId: { type: ObjectId, ref: models.vault.name},
	creatorId: {type: ObjectId, ref: models.user.name, required: true}
});

module.exports = mongoose.model(models.keep.name, schema);