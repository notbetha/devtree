import colors from 'colors'
import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url2 = `${connection.host}:${connection.port}`
        
        console.log(colors.cyan.bold(`MongoDB conectado en ${url2}` ))
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message))
        process.exit(1)
    }

}