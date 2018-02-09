using System;
using System.Linq;
using DbConnection;
using System.Collections.Generic;

namespace simpleCRUD
{
    class Program
    {
        static void Main(string[] args){
            Console.WriteLine("\n \n \n Welcome \n \n \n Displaying Currently Registered Users: \n");
            manager.displayUsers();
            Console.WriteLine("\n \n \n Please Register to Join our Database \n \n \n First Name: \n");
            string first_name = Console.ReadLine();
            Console.WriteLine("\n Last Name: \n");
            string last_name = Console.ReadLine();
            Console.WriteLine("\n Favorite Number: \n");
            string fav_number = Console.ReadLine();
            manager.create(first_name,last_name,fav_number);
            manager.displayUsers();
        }
    }
}