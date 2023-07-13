import { config } from "dotenv";
import app from "./app.js";

// Initializing the Environmental Variables of the Application.
config({ path: 'config/config.env' });

app.listen(process.env.PORT, () => {
    console.log(`Server Listening on http://localhost:${process.env.PORT}`);
});
