/* Define a Function That Can Answer The Role Of User
   A User Can Be On Following Roles
   1 ADMIN_   with all access
   2 SUBADMIN_ with access to create and delete
   3 TESTPREP._with access to create and delete test
   4 USER_   consume all content
   5 OTHER_ trial user */
// INPUT_ getuserrole(name,role)


function getuserrole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is subadmin with access to create and delete`
            break;
        case "testprep":
            return `${name} is admin with access to create and delete test`
            break;
        case "user":
            return `${name} is consume all content`
            break;
        default:
            `${name} is a trial user`

    }
}
let getrole = getuserrole("burk", 'admin')
console.log(getrole)
console.log(getuserrole('kartik', 'user'))


