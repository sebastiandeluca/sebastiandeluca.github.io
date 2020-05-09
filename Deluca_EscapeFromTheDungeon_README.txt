******************************************************************************				  
		ESCAPE FROM THE DUNGEON
******************************************************************************

Author -  Sebastian Deluca

******************************************************************************

Class / Section - ICS4U1

******************************************************************************

Date - 04/14/2020

******************************************************************************

Version - V 1.0 [I went a bit overboard.]

*****************************************************************************

Unit / Question # - Unit 3: Problem Set 4

******************************************************************************

Programming Language - Python 3.7.x

******************************************************************************

Problem Description – Create a program that will write a character file
	and randomly generate statistics for the character.

******************************************************************************

Program Assumptions -
Keyboard Required
Python 3.x.x Installed

******************************************************************************

Features of Program
			GENERAL
- EASY-TO-READ USER INTERFACE
	-Horizontal Menus and whitespaces to separate lines to make
	everyting easier to read

		      CHARACTER CREATION

- CUSTOMIZABLE
	User may customize inventory items and first/last name after
	creation of the character.

	ESCAPE FROM THE DUNGEON / ADVENTURE MODE

- A GAME! (Yes, I made another game.)
- Procedurally generating rooms
- Can spawn chests, exits, enemies, and randomized items in rooms
- Shopkeeper
	- The player can buy an item from the shopkeeper for use in
	   their playthrough
-Useful items
	- Items you pick up in-game can add to your stats and replenish
	   health to increase your chances of escaping the dungeon.

- Recursion
	- The room creation function utilizes recursion, because I
	   figured why not.

- Enemies
	- Enemy encounters where you fight from a selection of 5
	  enemies with varying attack damages and abilities.
	-SPECIAL ABILITIES
		-Though rare, the enemy may use a special ability
		  that deals extra damage to the player

-Cutscenes
	- At the beginning and end of the game (because yes, you can
	  beat it) there are cutscenes.

-SAVEABLE CHARACTER! (I'm very proud of this)
	- When quitting the game, you'll be offered the option to save
	   your character-- when you do, your character will be saved 
	   to a file, and the next time you launch the game, if you re-enter
	   Adventure Mode, you will be playing as your current character.
	  (And this includes after full restarts)
	
-REMOVABLE SAVED CHARACTERS
	- In the help menu, the user can delete their 'Adventure Mode'
	Character to allow them to restart. Your character is also
	deleted when you beat the game or you lose.

-Exception Handling
	- Due to special features and recursion stopping, exception
	  handling is utilized to prevent crashes when checking variables.

-RESOURCES FILE
	- All resources in the game are written inside a text document
	and read and inserted into the game by a function.
	
-USER INTERFACE
	- Game contains a main menu and a help menu
	
-OBJECT-ORIENTATED-PROGRAMMING
	- The player, enemies, and chests and weapons are all classes
	   that have instances when created in-game.

-ABILITIES
	-Based on their stats, the player has a certain percentage chance
	 to Dodge enemy attacks, be able to unlock chests without a key,
	 or get lower prices at shopkeepers.

******************************************************************************
			OMISSIONS
-EMPTY/NONE only has a chance of happening in Create-A-Character. 
This is to prevent Rooms meant to have items in it spawn saying 'Nothing
 is in the room.'
-The random-stat generation will not generate values from 1-20. It will
  generate values from 1-5. This is because if the values get too high, the
  Adventure Mode will become too easy. The character creator is utilized
 in both modes.

-The character does not have a 'back-slot' or 'right/left-hand'. This is
  because, much like the higher stat-gen range, it didn't work well for my
  program. I most likely would've implemented it regardless if I had more
  time, but I did what I felt was more important.
******************************************************************************

Restrictions – None.


******************************************************************************
Known Errors --
   In Adventure Mode-- when more than one criteria is met for room generation,
   the options will not update to show everything that is possible. This is
   due to how the option-updating is set up.

   If you know the keybinds, everything still operates.

                   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In Adventure Mode-- If you and the AI die at the same time in an enemy
   encounter, it will allow you to go back into 'ROOM CHOOSE MODE', but once
   you make a choice, it will return you to the main menu and remove your
   character, as expected.

   CREATE-A-CHARACTER: If one of the first/last names given to a character has
       spaces, changes to the name will cause the name to get butchered.
       [ex. 'The Sock Monkey Lover' 'afs'] change last name to McGee
       == ['The' 'McGee']

******************************************************************************

Implementation Details / How to build the program - For the user to run
                                                    the program they must
    1. have Python 3.x.x installed or they can find it here
        (https://www.python.org/downloads/)

    2. After being installed the user must open Python IDLE.

    3. After that the user must go to File > Open > 
       (select Deluca_EscapeFromTheDungeon.py ) to open.

    4. Then the user must Hit f5 on their keyboard or Run > Run Module.

******************************************************************************

~~ Additional Files ~~
Deluca_EscapeFromTheDungeon_Resources.txt
Deluca_EscapeFromTheDungeon_SavedCharacter.txt
---ANY FILES CREATED BY USER---

******************************************************************************