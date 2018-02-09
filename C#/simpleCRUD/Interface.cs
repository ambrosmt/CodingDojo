using System;
using System.Linq;
using DbConnection;
using System.Collections.Generic;

namespace simpleCRUD{
    public static class manager{
        public static void displayUsers(){
            List<Dictionary<string, object>> Users = DbConnector.Query("SELECT * FROM users;");
            foreach (var ROW in Users)
            {
                Console.WriteLine($"User: {ROW["FirstName"]} {ROW["LastName"]}");
            }
        }
        public static void create(string first_name, string last_name, string fav_number){
            DbConnector.Execute($"INSERT INTO users (FirstName, LastName, FavNumber) VALUES('{first_name}', '{last_name}', {fav_number});");
        }
    }
}