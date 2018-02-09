using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            IEnumerable<string> MVartist = Artists.Where(h => h.Hometown == "Mount Vernon").Select(n => n.ArtistName);
            IEnumerable<string> MVartistName = Artists.Where(h => h.Hometown == "Mount Vernon").Select(n => n.RealName);
            IEnumerable<int> MVartistAge = Artists.Where(h => h.Hometown == "Mount Vernon").Select(n => n.Age);
            // foreach (string answer in MVartist){
            //     Console.WriteLine(answer);
            // }
            // foreach (string answer in MVartistName){
            //     Console.WriteLine(answer);
            // }
            // foreach (int answer in MVartistAge){
            //     Console.WriteLine(answer);
            // }

            //Who is the youngest artist in our collection of artists?
            var baby = Artists.OrderBy(person => person.Age).First();
            // Console.WriteLine(baby.ArtistName + " - " + baby.RealName);
            
            //Display all artists with 'William' somewhere in their real name
            IEnumerable<string> will = Artists.Where(n => n.RealName.Contains("William")).Select(name => name.RealName);
            // foreach (string answer in will){
            //     Console.WriteLine(answer);
            // }

            //Display the 3 oldest artist from Atlanta
            IEnumerable<string> dino = Artists.OrderByDescending(person => person.Age).Take(3).Select(Rname => Rname.RealName);
            // foreach (string answer in dino){
            //     Console.WriteLine(answer);
            // }

            //Display all groups with names less than 8 characters in length --- NOTE querry did not check for spaces
            IEnumerable<string> shortGroupNames = Groups.Where(n => n.GroupName.Length < 8).Select(peeps => peeps.GroupName);
            // foreach(string answer in shortGroupNames){
            //     Console.WriteLine(answer);
            // }

            //Display the 3 oldes artist from Atlanta
            IEnumerable<string> oldAtlanta = Artists.Where(origin => origin.Hometown == "Atlanta").OrderByDescending(person => person.Age).Take(3).Select(peep => peep.RealName);
            foreach(string answer in oldAtlanta){
                Console.WriteLine(answer);
            }
            
            //(Optional) Display the Group Name of all groups that have members that are not from New York City

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'


        }
    }
}
