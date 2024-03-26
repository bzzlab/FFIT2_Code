/**
 * asynchronous function for fetching data
 * @returns {Promise<any>}
 */
const SERVER = "http://localhost:3000";
async function getStudents() {//??
    const response = await fetch(SERVER+'/api/v1/students/');//??
    // waits until the request completes...
    return await response.json();//??
}//??

