let current_users : string [] = ["Yousra","Sidra","Umaima","Hurain","Haniya"]
let new_users : string []=["Hurain","Hiba","Haniya","Shazneen","Munishba"]

let current_users_lower : string [] =current_users.map(user => user.toLocaleLowerCase())


for (let new_user of new_users){
    if(current_users_lower.includes (new_user.toLocaleLowerCase())) {
        console.log(`Sorry ${new_user}, enter a new name`)
    } else {
        console.log(`${new_user}, this name is available`)
    }
}