import User from '../modals/user.js';
import encrypt from "encryptjs";
import axios from "axios";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) return res.send("Name is required.");
        if (!email) return res.send("Email is required.");
        if (!password) return res.send("password is required.");

        const response = await User.find({ email }).exec();
        if (response.length) return res.send("Email alredy taken");

        var secretpass = "pass";
        var encryptpass = encrypt.encrypt(password, secretpass, 256);

        const data = new User({
            name,
            email,
            password: encryptpass
        });
        await data.save();
        return res.send("registration successful");
    } catch (error) {
        return res.send(error);
    }
}

export const getTemperature = async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) return res.send("City is required");
        const keyForWhether = "d5dfe6c541f7cfdd9a90c665d7ff1cd6";
        const response = await axios.get(`http://api.weatherstack.com/forecast?access_key=${keyForWhether}&query=${city}`);
        // console.log(response.data, "response")
        res.send(response.data.current.temperature.toString());


    } catch (error) {
        return res.send(error);
    }
}

export const windspeed = async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) return res.send("City is required");

        const keyForWhether = "d5dfe6c541f7cfdd9a90c665d7ff1cd6";
        const response = await axios.get(`http://api.weatherstack.com/forecast?access_key=${keyForWhether}&query=${city}`);
       
        return res.send(response.data.current.wind_speed.toString());

    } catch (error) {
        return res.send(error);
    }
}

export const astro = async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) return res.send("City is required");

        const keyForWhether = "d5dfe6c541f7cfdd9a90c665d7ff1cd6";
        const response = await axios.get(`http://api.weatherstack.com/forecast?access_key=${keyForWhether}&query=${city}`);
        const data=response.data.forecast["2023-06-15"].astro;
       res.send(data)
    } catch (error) {
        return res.send(error);
    }
}