import connection from "./database/db";

async function testDatabase(){
    try{
        const check = await connection.query(`SELECT NOW()`);
        console.log("Database connected");
        console.log(check.rows);
    }catch(error){
        console.log("Database connection failed:", error);
    }
}

testDatabase();