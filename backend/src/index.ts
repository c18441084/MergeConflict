import connection from "./db";

async function testDatabase(){
    try{
        const check = await connection.query(`
            DROP TABLE test;
        `);
        console.log("Database connected");
        console.log(check.rows);
    }catch(error){
        console.log("Database connection failed:", error);
    }
}

testDatabase();