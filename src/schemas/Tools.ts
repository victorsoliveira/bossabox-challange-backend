import { Schema, model, Document } from 'mongoose'

interface ToolModel extends Document {
  title: string;
  link?: string;
  description?: string;
  tags?: string[];
}

const ToolSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  link: String,
  description: String,
  tags: {
    type: [String],
    validate: (v): boolean => {
      console.log(v)
      return true
    }
  }
}, {
  timestamps: true
})

export default model<ToolModel>('Tool', ToolSchema)
