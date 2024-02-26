var current_users = ["Yousra", "Sidra", "Umaima", "Hurain", "Haniya"];
var new_users = ["Hurain", "Hiba", "Haniya", "Shazneen", "Munishba"];
var current_users_lower = current_users.map(function (user) { return user.toLocaleLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLocaleLowerCase())) {
        console.log("Sorry ".concat(new_user, ", enter a new name"));
    }
    else {
        console.log("".concat(new_user, ", this name is available"));
    }
}
