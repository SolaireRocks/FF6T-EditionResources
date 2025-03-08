html files, in-game translations, and this guide translated by Kain Stryder - InsaneDifficulty.com/NGPlus.net
Menu work/coding and in-game translations done by Lazarus_DS
Menu work/coding done by dn
Lua coding done by Serity
Scan/Ragnarok/Enemy Formations etc and misc data was found/compiled by Serity/Madsiur
MSU-1 was compiled and coded by iwatchgamesometimes

Current Mod Version: 3.0.5
Current English Version: 3.0.5

Want to reach me/us? http://l.kaffemyers.com/ngpluschat (Discord link) - Post here in the FF6 T-Edition channel.
Kain Stryder#5521 on Discord otherwise for direct PMs (friend request me first).

KEEP BATTLE SPEED ON 3 OR YOU MAY HAVE A BAD TIME; SPEED ONLY AFFECTS ENEMIES NOT YOU!

PLEASE READ THE BELOW AFTER SETUP AND PLEASE CHECK OUT THE HTML FOLDER FOR HELPFUL GUIDES (OPEN THE INDEX FILE IN ANY BROWSER).

Please also note our translation will not run well on console, handheld, or phone due to needing the lua script. If you would 
prefer to play on these, please use Mato's translation found here: http://ff6t.net

UPDATE: Will now run on Android and Steam Deck, please read the Android readme.

Patch order: Japanese 1.0 ROM->T-Edition or EX .ips->Any optional patches->MSU-1

To get rid of the annoying yellow text/frame rate at the bottom of the emulator, just hit your . and , keys.

If you repatch the game at any time after doing MSU-1, simply do the above again but you don't need to redownload the MSU-1 files. 
Just apply the msu.ips file on your game after you're done patching, put it in the msu folder (same file name and replace the old 
game file) and you're set.

Disable/Enable lua features and setup:
 
Open the lua in Notepad++ and at the very top is a bunch of text with "true" written. If you want anything off or changed due to not 
wishing to have certain information displayed or feel some of it is cheating, simply change anything that says "true" to "false" and 
save the file. Most of this is quality of life we added, but it's all optional for the reasons stated.

Emulator needed for the lua: https://github.com/gocha/snes9x-rr/releases

ONLY LOAD THE FF6_T_Lua_QoL_v3 LUA FILE, NOTHING IN THE PLUGINS FOLDER! DO NOT LOAD THIS FILE FOR MATO'S, HIS HAS A SEPARATE FILE 
(MatoQoL) SPECIFIC TO HIS TRANSLATION!

Download the above, load the emulator, load the game, load the lua (File->Lua Scripting->New Lua Script Window->load the lua script and 
do NOT close the window, minimize it if you wish, and enjoy. PLEASE though read over the html files for helpful guides, the readme files 
for general information, and the optional patches in the event you want to replace costume stats to original/optional. If you wish to 
play 100% blind and no advice or spoilers, don't read any of the below where it says "Notes on the game itself" and/or only check the 
html files at your own discretion. Those files are basically strategy guides/the entire game's information laid bare as help files/where 
something is, new events, changes the mod adds, etc. It's EXTREMELY thorough, and took a LOT of work.

Note: If you want to fix the music in game via the SNES9x-rr 1.60 emulator, go to Emulation >>> Hacks >>> OK >>> Check Separate Echo 
Buffer from RAM if you don't patch the music fix in the Optional Patches folder. Note you can do this+the music patch, but it will still 
not sound 100% as intended unless using the MSU-1 option.

Another note: If in the lua you wish to randomize the FF6 battle/boss music instead of selecting them manually in the music player, 
change the following code in the lua from:

        local defaultNormalTrack = 0x24 -- battle theme
        local defaultBossTrack = 0x14   -- the decisive battle
        local normalTrack = memory.readbyte(storedBattleMusicByte)
        local bossTrack   = memory.readbyte(storedBossMusicByte) 

to the below:

        local defaultNormalTrack = 0x24 -- battle theme
        local defaultBossTrack = 0x14   -- the decisive battle
        local normalTrack = math.random(1,0xFE)
        local bossTrack   = math.random(1,0xFE)

Make sure to open the file in Notepad++ to edit it.


Notes on the game itself:


The normal game file to patch is the T-Edition one (2.9.4). EX patch (1.6.3) is for extra content after you've cleared the game and/or beaten 
the sidequest "Holy Angel Ultima" (see event.html for more). It's basically disc 2 with some achievements/challenges you can transfer back 
over to disc 1 (2.9.4's file) upon finishing or just wanting to return to the base game. The how-to guides and everything you need to know 
is explained in the EX readme in the HTML folder.

If you aren't using the English LUA script, please again consider using Mato's patch if you wish to play on console, handheld, or phone. 
Again this can be found here: http://ff6t.net


Some notes on this translation:

- I am not 100% fluent in Japanese just to state this. There may be some mistakes and errors, and for that I apologize, as I am not a 
professional translator. This was my first serious project (now 2 as of March 2021, I helped with the FF5r translation. This blurb was 
written back in 2017 and you can mostly ignore it now as I've improved drastically and can assure you everything within is 100% accurate 
now). I used a kanji dictionary for most of my help when I didn't understand something, otherwise I had help from 2 of my Japanese friends 
when I was ultimately stuck. However, everything translated within is accurate and more than good enough to get you through the game, I 
assure you, barring the possible screw up here and there. (10/8/20 - In my 3+ years since starting this, I've improved drastically and went 
through the files again to fix up/touch any mistakes, so I can with better confidence tell you stuff within is very accurately translated.) 
In-game menu work and translations were handled by Lazarus_DS, not myself. Any file work within here was done by me, with help from Serity 
and others mentioned at the start of this document (data mining information, etc). If you are using the English LUA script, game dialogue is 
a mixture of Peter Svensson's insanely detailed work, using my translations and Mato's (Clyde Mandelin) for any new events/dialogue, while 
the base game dialogue/script is the official English GBA script. Please note Mato (Clyde Mandelin) did not officially help with this project 
beyond handing me his hacking documents to assist us; Peter simply went over his Let's Play and grabbed translations he did while playing, as 
well as my videos. I assisted Peter/Serity in correcting any errors/dialogue, especially due to later versions of this mod having been 
changed (Mato played on a very old version). I don't want any confusion or for people to bother him/get the wrong idea, as he is not part of 
the team currently handling this. We just simply want to give credit where credit is due, and we appreciate the help!

Please note the English LUA script project is a separate work from myself, Lazarus_DS, and dn's work. Any questions/comments etc should be 
directed at Serity via the above Discord link or the NGPlus.net forums where you downloaded this (separate thread). I am the only member of 
this team that assisted in her project, but please keep any questions to her; I just did translation work, none of the LUA coding.

- I purposely kept the names from the Woolsey translation of FF3 for the SNES because most English players recognize them. (Tina/Terra, 
Mash/Sabin, etc.) A few Slattery names have been used also from FF6A on GBA, but I did name some things based on official name schemes off the 
FFWiki. If I were to write "Hissatsuken" for Cyan, "Mafuuken" for Celes, etc, few would understand it, and that's just not what a translation 
is all about, so I went with Iaido and Runic. Shadow's "Throw" or "Ninjutsu" abilities are stuff like Fire Arts, Hidden Amongst Leaves, etc 
and I went with Flame Scroll, Vanish Scroll instead. So if you can read Japanese and figure "why did he translate it as this", there's why. 
There's a LOT more examples, but you get the idea. Lazarus_DS did the same thing with the in-game translations, going for a mix of familiar 
and official name schemes. While we can't make everyone happy, we hope this doesn't detour you from enjoying the mod (the lua script uses 
the GBA dialogue, any new events/dialogue was handled by myself and as mentioned above, some was from Mato).

- For the armor, weapon, item etc lists, I kept the Japanese names in and what the accessories do in Japanese, so you can match the 
symbols up and find the English name easier while playing the game. The description text was omitted, and it's English only now. (This is 
just if you're playing in Japanese and want some help.)

- For the newevent.html, these are the new side quests, detailing locations and step-by-step instructions on how to clear them. Japanese 
names are kept so when you're at a NPC and trying to flag one, you can match up the symbols and read about the quest. Same as the above, 
really. (This is for the raw Japanese version or if you aren't using the English LUA script by Serity.)

- We didn't write/translate the soundtrack names in-game via the Music Player; these were written by Tsushiy in English. The menu is 
untouched. Track titles are actually official names, such as Edgar & Mash or Colliery Nalsh, etc.


Some quick tips:

- It's strongly suggested you leave the battle speed on 3 (normal) as making it fast (1) only affects the enemy speed, NOT yours. So 
if you want a higher challenge, put it on 1, easier for 6, 3 for normal. It's the same as vanilla's.

- The Narshe Beginner's Hall desk clerk will update the NPC dialogue of everyone inside if you talk to him and tell him you know the 
basics. This dialogue is for the mod. If you want the original dialogue back, talk to him again and inform him you're a beginner.

- Nothing is missable anymore. Due to New Game+ available at the Narshe Beginner's Hall after you get the Falcon in the WoR (talk to the 
NPC behind the counter), you can replay the game over and over, amassing multiple copies of rare equipment. Only a few things in the 
WoB are actually missable, so pay attention to the newevents.html for a check list. If you care about the achievements, the bar quests 
must be done all in 1 go, they do *NOT* carry over. Get the achievement then ignore any unimportant ones on repeat plays. Some people 
enjoy running to the WoR, raiding Kefka's Tower and some other hot spots, then starting over immediately (Merit Award, Molulu's Charm, 
Fixed Dice, etc).

- Some things from the original game still apply, but read over the changes and read me htmls to get a grasp of what's different.

- If you're trying to farm a drop off an enemy, the drop is determined *BEFORE* the battle begins, so save/load, get into a separate 
battle and win, then enter the battle you want a drop from, clear it, repeat if no drop. Steal is affected by the current frame the game 
is on when you select "Steal" or "Mug" etc and hit confirm on the target. Save state prior to doing this, wait a second, then re-select 
Steal and confirm the target again to have changed the RNG. It will NOT change if the cursor is on a target, so make sure it's 
de-selected and sitting on the "Steal" text.

- Levels are extremely important now. Due to no Esper/Eidolon level up bonuses and how the stats have been reworked, grinding is your 
new friend. You don't need insane levels, but if you find yourself absolutely getting your face eaten, get some levels. More Gil never 
hurts, either.

- Treasure chests do upgrade like the original game, so hold off on them if you care enough. The rewards are not 100% the same, but are 
rather good (Narshe Mines, South Figaro Cave, South Figaro (outside treasure in boxes, barrels, etc, NOT the basements), etc). Chests 
in the South Figaro Cave or any map that you're placed on for a bar quest is a SEPARATE MAP, so loot the chests, as they are not the 
same ones (example: South Figaro Cave during the "Destroy the Cave Demons" quest, you can open the chests here and the ones in the 
actual South Figaro Cave will remain untouched). If you flat don't care, that's fine too, as nothing in these chests is one of a kind.

- Need some Gil in WoB? Zozo is a great spot to grind early on. Dragoon Boots drop off Harvesters, Ironclaws have Kaiser Knuckles to 
steal and also drop the Needle dagger. Before that, the Veldt once you get Gau. Hyper Wrist drops sell for some nice cash. Pressed even 
more? The Thunder Rod, Flame Rod, and X-Potions sell for a LOT. Do the bar quests also for quick money. With the airship in WoB, you can 
farm outside Thamasa stealing Gaia Gear and Hyper Wrists. Need Gil in WoR? Battles on the grass outside the Dinosaur Forest. Vanish up, 
spam Ramuh/Thunder damage and profit. Crystal Mails drop off the enemies and sell for a ton of money. Nice level grinding also if you 
can't handle the dinosaurs yet, either. Alternatively, the bar quest in Albrook for the fish gets an X-Potion and is repeatable, netting 
18,000 gil a pop. You can also steal these off the Peeper on Solitary Island.

- Speaking of the above, if you hate grinding in general, as soon as you get the Falcon, do not recruit anyone else. Take Celes, Edgar, 
and Setzer (Sabin if you got him too) and go grind their levels up. Anyone you recruit hereafter will be at their level, without you 
having to grind every character up. If you want a personal suggestion on what's a good level to stop, comfortably, level 45, but feel 
free to go beyond that. Gau however will NOT level for some reason, so he must be grinded separately.

- Need fast AP? Intangir island in Balance gives 20 AP per battle with the Intangir (Death Sentence him or do the Confuse+Smoke Bomb 
trick from vanilla) for an easy win. In Ruin, go to Zone Eater island and in the forest are Skull Eaters. Vanish up and use 
defense-piercin damage (Chainsaw, #8 Bushido, Phantom Rush, Ultima Weapons, etc etc) for an easy 15 AP.

- A massive hint for strategy on any battle, including bosses, is to try using status debuffs. Sleep, Confuse, Toad, Berserk, etc, stuff 
works now. Not all the time, but sometimes some bosses have one vulnerability that just cripples them. Try things, experiment. Don't get 
into a mentality of just slamming attack over and over or never buffing yourself/debuffing the enemy.

- Be sure to check the Ragnarok html for some good items, especially Soma Drops (which can be Coliseum'd into Golden Apples and 
vice-versa). Please note that Soma Drop/Golden Apple uses do not carry over into New Game+ (for example, if you used 5 Golden Apples on 
Terra for +500 HP, she won't start New Game+ at level 3 with +500 HP).


WARNING: Sometimes the game may just up and crash. This is due to the nature of how heavily this game's been modded. Usually after a battle 
the screen will go black with weird graphical errors. The chances of seeing this are extremely low; as in maybe once or twice per the entire 
game. It may also happen after stealing (again, extremely rarely. I've personally seen it only when Locke steals clothes and then one time 
stealing randomly in the game. It's just really, really rare). All you can do is save often. This isn't something we can personally fix 
let alone begin to even look for why this happens. I've personally seen it happen just leveling outside the Dinosaur Forest, I've seen it 
happen to people in various battles randomly in the WoB, it's just anywhere. But again it's so rare you may not even see it happen, but I'm 
giving the heads up as a precaution. Save often!

As of 3/3/21, please read the Current Known Bug(s) file in this download for information and how to prevent glitches/bugs that are 
currently affecting the game.

And finally, one quick little thing I was never aware of, even in vanilla, is enter the Config window, highlight the "Cmd.Set" and set it 
to "Short". Then press the A Button and a menu will pop up, letting you re-order around the in-battle commands to your liking. So instead 
of 

Fight
Steal
Magic
Item

You can put Steal at the top, Item after it, etc. This even works for Gogo, letting him move Mimic out of the top slot. Set the cursor 
back to "Window" afterwards if you want the commands stacked, other wise leave it on "Short" to have them in a D-Pad formation.

One other feature that the English version didn't have, and more importantly if you are wanting to play on console, is there's a button 
config option. Scroll down to "Controls" and select "Custom", then press the A Button. Set your controls up and when done, press the 
Start Button to confirm and exit the menu. Enjoy!


VERSION UPDATE NOTES


4/29/17 - Version 0.1.0 

- First release.

5/2/17 - Version 0.1.1

- Minor edits/fixes, addition of translation of each of Gau's Rage attacks to the rage.html. Currently, 6 Rages are missing due to I don't 
have them to check their abilities. They'll be ninja updated in as soon as I get them. Ignore this if the message mentioning them in 
rage.html is missing. Otherwise, please wait a while. 

- history.html is still being worked on, but not a huge priority.

5/12/17 - Version 0.1.2

- Minor small changes/fixes. Mostly correcting new event information and other small errors, as I play personally and witness things.

- Rage abilities are now complete.

11/16/17 - Version 0.1.3

- Fixed some confusion with the Narshe Residents sidequest.

- Added answers to Gogo's Quiz for his Narshe sidequest for his costume and accessory.
  
11/18/17 - Version 0.1.4

- Added exactly where the tombstone in Forbidden Land Eureka is located for the "A Secret Present" sidequest is, as well as the answers to 
the quiz for it.

- Some small errors were fixed.

12/14/17 - Version 0.1.5

- Included UOSNES emulator, which is the suggested emulator to run this game on. I now strongly recommend it, as it runs the game very 
nicely and there's no more music errors, either. If you need to switch your save over to this emulator, simply copy the .srm file into the 
main folder of the emulator (after changing the location of saved games to /UOSNES in the File Directory option on the emulator) and load 
the game up. You can't use save states to do this, it won't recognize them, so hard save, load, then you can make a new save state.

8/11/18 - Version 0.2.0

- Added a few more new notes in this read me at the top, changed some stuff around for file names for folders, and added 2.9+'s dev notes 
to the history.html. Please make sure if you're in English, which is 2.7, do not put battle speed below 3. Keep it even at 6, 1 is suicide. 
There is a glaring bug that he just couldn't fix and reverted it back to vanilla's code for it in 2.8.

9/17/18 - Version 0.3.0

- Translated (most) of the dev notes under "For Producers" and "BNE2" folders. We are also currently working on a full English translation 
of this game now, myself and several people, including Lazarus! Stay tuned for updates!

12/2/18 - Version 0.4.0

- Released an updated English version patch, putting the game at 2.9.2 now. The old bugs/glitches present have been fixed and are no longer 
an issue. Feel free to play this on console now!

10/25/19 - Version 0.4.1

- Currently hosted on the NGPlus.net site, we have a proper home now. Find us on Discord, link at the top of this document.

11/6/19 - Version 0.4.2

- All files under the BNE2 folder are now translated, allowing us and anyone else familiar with coding to easily locate and edit the game's 
data. Translating the game is now underway!

11/16/19 - Version 0.4.3

- Added an Item Drop/Steal List to the html folder, as well as how to view if you fail/succeed or the enemy just has nothing, until we can 
fully translate everything. Enjoy!

1/4/20 - Version 0.5.0

- VERY minor update, but some progress. The menu has been SLIGHTY adjusted to not have Eidolon names overlap with the Japanese text, and job 
titles are now correct for a handful of some that were mixed up before.

1/5/20 - Version 0.5.1

- Mog's Dance menu has had the character limit extended and made to look a bit nicer.

1/12/20 - Version 0.5.2

- Some small errors in the html files were corrected.
- Main menu is now translated/untruncated. 
- Skills menu is untruncated.
- Healing Staff no longer disappears on auto-sort.
- Heig spell (Hastega) has been renamed temporarily. 
- The SahagCh Rage's name has been fixed. 
- Statuses are now fixed in and out of battle.
- A new _index.html has been added, thanks to Serity. Open this first before you browse any html file for an easier time!

1/15/20 - Version 0.5.3

- Several small changes in the ROM, mostly untruncating more of the above from the last update, as well as item menu information such as 
Runic OK, Two-hand OK, etc etc.
- Several corrections to html files.
- A BIG thank you to Serity for compiling a VERY intense Scan/Libra cheat sheet, as well as Ragnarok Trance data. This can now be found in the 
html files, so please use it.
- Same with the above, a new Coliseum List has been added, again thanks to Serity for this.

1/16/20 - Version 0.6.0

- Equip menu titles are now untruncated.
- Expanded the "Equip"/"Remove" box by one to fit the text, inserted and moved the text.
- Fixed the "2Sword" bug where text would get left over (Tsushiy wrote the text somewhere the game wasn't auto-erasing.)
- Renamed "2Sword" to "DWield". Sadly, six characters of space is all we have unless we can figure out how to get the game to erase more 
characters.
- Various mistakes in some html files, as well as a cliff note in the Dressing Room and Window Type html files.

1/18/20 - Version 0.6.1

- Various fix ups on the translation and making things readable in the menus, including the save screen, config, equip, eidolon magic screen, 
party set up and a few other minor tweaks/bug fixes.

- A new dressing room graphic in the html has been added for easier cross-referencing, thanks to Serity on this.

- Various html file corrections.

1/19/20 - Version 0.7.0

With some more work from Serity, we now have 2 optional patches in the Optional patches folder, which are heavily suggested you use. Keep in 
mind these are still very rushed and beta. The patches are:

kanji_swap_elements_only: This will change the 8 basic elemental kanji into the SNES English versions graphic symbols, allowing you to see 
what an enemy's weaknesses are and equipment's elemental affinity etc. The downside is this will replace some in-game dialogue but it's a minor 
thing. Use this if you ONLY want the elemental kanji changed and NOT the stuff mentioned below, however, remember that steals/treasure will be 
garbled in Japanese and you'll have to sort your inventory/search for what you get constantly.

kanji_swap_elements_treasure_steal_battle_magic_and_items: This is the big one. Same as above, but it will also now let you read in English 
what items you find in treasure boxes, what steals you get, and magic/items used in battle. However, the downside to this and why we made it 
separate is it garbages up the in-game dialogue. This isn't a huge deal since if you can't read Japanese, you aren't missing anything, but it's 
important enough we wanted to release this so people can have an easier time enjoying the game and seeing what they collect/steal without 
jumping through hoops. On a professional level, this is extremely rushed and very beta, so we apologize, but until we can polish it up and get 
something nicer, it'll have to do. 

To use either of these patches, simply use Lunar IPS included in this download and patch either file onto the English T-Edition and have fun.

1/21/20 - Version 0.7.1

- A new optional patch to have the Yes/No dialogue choices in English is now available. This also translates the New Game+ choice in the Narshe 
School at the front desk during the WoR.

1/24/20 - Version 0.7.2

- The Eidolon menu is not non-truncated and has been made into 1 column.

- Blue Magic has also been non-truncated and made into 1 column now as well.

- Few corrections to some html files, as well as for the Achievements side quest, I've added the location of a new NPC and house in the WoR who 
helps you keep track of your progress for say, Steal successes, Runic absorbs, etc.

1/29/20 - Version 0.7.3

- Various small edits to the menus and making them non-truncated

- Status title menu expanded; new title inserted.

- Status menu strings have been rearranged and non-truncated.

1/31/20 - Version 0.7.4

- Most of the Config menu is complete.

- Fixed the "Short" command type menu.

- Translated the "Multi" control style menu.

2/8/20 - Version 0.8.0

- VWF for descriptions added by dn.

- Rages are now in alphabetical order. Alternatively, use this link to customize them to put your favorites at the top of the 
list! - https://pastebin.com/raw/NSsqpnZy - Thanks to Serity for both of these.

- Magic, Blitz, Iaido, Eidolon, Blue Magic, and Rage descriptions translated and inserted.

- Due to the above, we have removed the kanji+steal+treasure patch, as it not only breaks things, but our work now translates it. However, a 
downside is the Japanese dialogue and such is now even more unreadable and a mess, so for the time being, we apologize until we can address 
and fix this. As of now, you can read steal and treasure box results without any patches, however, yes/no patch still works AS FAR AS WE KNOW, 
but any issues, please report them. Kanji only patch will ONLY now replace the Libra scan weaknesses with SNES graphic icons and no longer 
shows the elemental affinities on armor (they are busted kanji, please ignore for now). Another result of the above is kanji in menus and item 
descriptions is double overlapped, so again, sorry for the mess in the meanwhile.

2/10/20 - Version 0.8.1

- Re-added v7 of the English version that has most of the Japanese still intact, before v8's destroyed it. If you prefer to have Japanese still, 
use v7, otherwise, continue using v8 and above (v7 does NOT have descriptions in English). Also, I've re-added the optional patch to translate 
steals and treasure boxes solely for the v7 version (it's not needed for v8 or v9+ DO NOT USE THEM).

2/14/20 - Version 0.9.0

- The next major update will push this to Version 1.0!

- dn fixed the MP cost/percentage for the magic menu, so we have expanded magic names in the main menu now!

- dn also fixed the issues on the Eidolon menu with text being weird.

- Changed the blank Blue Magic routine to blank out the entire line, fixing the blank slot issue.

3/18/20 - Verions 0.9.1

- Thanks to Emberling (courtesy of Serity), we have an optional music patch fix in the "Optional Patches" folder for use now. This patch will 
correct any of the beeps/boops you hear in some songs if you play on SNES9x or any other emulator that isn't the UOSNES that Tsushiy recommends. 
Enjoy!


Fixed throughout music:

Final Fantasy XMAS Ver [Achievement Room 100% completion]
FF7 Those Who Fight Further [vs. No. 128 & Inferno]
FF8 The Man With The Machine Gun [Cyan's Dream fights]
FF8 Force Your Way [vs. IAF & Iron Clad]
FF8 The Extreme [vs. Ultima, Soul Shrine Group 15]
FF9 Battle 1 [Eureka Battle]
FF10 Servants Of The Mountain [Eidolon Cave, Falcon: Umaro's Ronso Waist Cloth]
FF13 The Sunleth Waterscape ["Night Patrol" side quest, Falcon: Sabin's Nora's Coat]
FF13 Blinded by Light [Ancient Castle Cave & Ancient Castle Battle]
FFT Antipyretic [Narshe Snowfield Defense Battle]
BDFF That Person's Name Is [Soul Shrine Group 9]
SD2 Meridian Dance [vs. Valigarmanda]
SG2 Decisive Battle [vs. Blue Dragon]
SG3 SOL Pileup Stack [vs. Storm Dragon]
RS2 The Sinking Ship [South Figaro "Destroy The Cave Demons" side quest]
RS3 Bottom Sea Palace [Ancient Castle Cave]
XG Awaken [vs. Ultima]
LAL Pure Odio [vs. Wrexsoul]
RUD The Flame and the Arrow [vs. Red Dragon]


Minor(?) intro fixes:

*FF1 Boss Battle B [Vs. Marilith & Tiamat]
*FF3 Final Battle [Soul Shrine Group 10 & Cloud of Darkness]
*FF5 The Decisive Battle [vs. All-Knowing One (Omnicent) & Exdeath]
*FF7 Fighting [WoR Phantom Forest Battle]
*FF7 J-E-N-O-V-A [vs. Omega]
*FF7 One Winged Angel [vs. Sephiroth, Soul Shrine Group 14]
*FF9 Not Alone [Cyan's Dream Event]
*FF9 Battle 2 [vs. Earth Dragon]
*FF10 Men Staked On Blitz [Falcon: Sabin's Auroch Bandana]
*FF10 Seymour Battle [vs. Shinryu]
*FF11 Belief [vs. Kam'lanaut & Eald'narche]
*FF13 March of the Dreadnoughts [Falcon: Terra's Bodhum Military Uniform]


Note: Currently we're aware of FF4: Fabul and FF5: Good Night tracks being a bit broken. Fabul will loop over itself (this persists even in 
the Japanese version) and Good Night just sounds bad (Kohlingen Inn music).

8/6/20 - Verions 0.9.1a

- Rehauled a bunch of the html files and cleaned them up/corrected a handful of mistakes and errors. I went over each page and double-checked 
the translations as well as did my best to make everything look a bit nicer (mostly the weapon/armor lists, the dressing room, magic lists, 
(including a better list for what teaches Blue Magic) and the new event html). Also added a Rage list for the English version to better help 
you in seeing what you're missing. Please note this list doesn't have locations for the Rages and is just a check list. You CAN check the 
Japanese list (still available), but remember the names won't match up for some of them. I may add locations later for English but it'll take 
some time since there's 255 of them.

As of this writing please note that current-known issues are the following:

- Eidolons in the magic menu in battle will show up as incorrect or weird names (such as you have Siren equipped but it says Phoenix in battle, 
or you have Shiva equipped and it just says "ra"). This is something Laz needs to fix but in the meanwhile what you have equipped will still 
work and it won't summon Phoenix, etc.

Here's a list for reference of how they appear in the magic menu in battle until this is fixed:

Ramuh=Fenir
Kirin=Kirin
Siren=Phoenix
Cait Sith=Cait Sith
Ifrit=Ashura
Shiva=ra
Unicorn=Unicorn
Catoblepas=blank space
Phantom=Phantom
Carbuncle=Carbuncle
Leviathan=atha
Golem=Golem
PuPu=PuPu
MistDrgn=MistDrgn
Seraphim=Seraphim
Fenrir=Fenrir
Valigarm=Valigarm
Titan=blank
Ashura=Ashura
Diabolos=Diabolos
Phoenix=Phoenix
Odin=Odin
Bahamut=Bahamut
Ragnarok=Ragnarok
Crusader=Crusader
Ultima=Ultima

- Spell learn rates in the item menu on the left side just show as "Protect :" instead of "Protect : x1". Please just refer to the weapon/armor 
html for the exact rates until this is fixed.

8/7/20 - Version 0.9.1b

- Added locations for Rages on the English version as well as fixed up the Japanese version a bit (there was some mistakes).

- Added 2 new tabs on the side bar, Enemy Formations. Now you can browse and see any formation in the game for hunting Rages or Steals/Drops.

8/15/20 - Version 0.9.1c

- Added a Soul Shrine Formations guide.

8/20/20 - Version 0.9.1d

- Added a Veldt Formations guide.

8/23/20 - Version 0.9.1e

- Added the in-game names to the weapons and armor.html to now correctly assist in finding information. Also fixed a few other things here and 
there, but mostly QoL adjustments to just assist you, the player.

9/2/20 - Version 0.9.1f

- Added in a Ragnarok guide that's now separate from the Item Drops/Libra/Steal guide. Enjoy this comprehensive list!

9/4/20 - Version 0.9.1g

- The history.html is finally fully translated. With this, every file in the mod has been put into English now. Enjoy, because that html 
alone was pure hell and a slog to do.

9/9/20 - Version 0.9.1h

- Added a new folder called SPOILER - Scripts. Inside here you'll find a complete AI Script for the main game and EX (disc 2), including also 
the Confusion script (Control/Coliseum AI, but that's been axed in this mod, but useful otherwise for using Confuse and seeing what enemies 
do, especially since some Blue Magic can be learned this way). These aren't linked in the main guides so if you want to seek it out, it's 
there if you choose to, or if you're a modder and just want that information. Thanks to Serity for all 3 of these. Enjoy!

9/14/20 - Version 0.9.1i

- Added a Shop List to the files.

9/16/20 - Version 0.9.1j

- Added a very small fix to the base ROM (it's pre-patched, so don't worry) that now corrects auto-sorting properly. You'll no longer have 
Black Belt or other things mixed in with swords or armor; everything sorts nicely and where it should.

9/18/20 - Version 0.9.2

- Fixed the above mentioned Eidolon bug in the 8/6/20 update where names wouldn't be displayed properly for a handful of them in the battle 
magic menu, as well as the item menu magic learn rate displaying "Protect   :" or "Fire    :" etc and not the x1, x5, etc learn rates.

10/2/20 - Version 0.9.2a

- The display for "Silence" has been fixed. The flag to display it wasn't checked in T-Edition, but now it is. Silence will now show if it 
lands or misses.

10/8/20 - Version 0.9.2b

- Cleaned up a handful of mistakes/errors in the BGM.html and some other places.

10/20/20 - Version 0.9.3

- Corrected/fixed up some in-game names and reflected them in the html files (some weapon/armor/item names). Also added into the Spoilers 
folder an item location guide. Also for stealing, getting drops off monsters, etc, so use that if you want to know the best places to get 
something or if you simply missed it. I've also added a more quicklist check sheet for worthwhile drops/steals/Ragnarok morphs, which is 
in the normal html files/side bar of the index.html.

10/25/20 - Version 0.9.3a

- Corrected numerous magic and technique.html mistakes. Pulled the data from the game itself and double checked every spell/attack's 
Effect Value, MP cost, data, etc due to Tsushiy having a lot of errors listed. The information is now 100% correct. For a more detailed 
run down, check the spell data in the SPOILERS folder.

10/26/20 - Version 0.9.3b

- Corrected various mistakes in the weapons and armor.htmls. Went through each item and fixed any errors using data pulled from the ROM 
itself. In doing so, we learned of a... rather unique feature with a certain weapon combination. Be sure to check the changes.html under 
Dancing Dagger and then the weapons.html under Gekkabijin. Enjoy!

10/27/20 - Version 0.9.4

- Released the long-awaited in-game battle magic menu, custom built by dn that we showed off back in Feb/March of 2020 or so. However, the 
reason we didn't release this was due to the top part of the menu bleeds over into the Slots menu and on a professional level, we didn't 
want to release something looking like this. We couldn't fix it either and had a few others try looking into it and gave up, so it sat on 
the back burner for a while. Thanks to Bropedio, we got the ball rolling to add it in, and then with Serity's assistance, tweaked the 
coding a bit to fix it up and here we are. The fix is NOT officially on the ROM though; this is because I decided to release it as an 
optional patch for those that don't care about the slight menu bleed and don't want to look at 4 character limits on their spell menu. You 
will have to apply the ips patch of it included in the Optional Patches folder, until, if ever, we solve the Slots issue. We also have NOT 
tested this 100% so if something somewhere breaks, we don't want people screwed over and unable to play. Hence, they can just redownload 
the ROM and ignore it if it's breaking something. Until then, enjoy it!

11/10/20 - Version 0.9.4a

- Various small corrections in names for special attacks of enemies/the player characters and a few other small fixes not worth noting.

11/14/20 - Version 0.9.4b

- Cleaned up the weapons and armor htmls a bit more, as well as fixed the Mjolnir graphic (it was Earthbreaker's) as Tsushiy never added 
it.

- A brand new costume system (OPTIONAL) has been added into the Optional Patches folder. This is an alternative option for the costume 
stats that adds a bit more fun/replay value and strategy to the game, making each costume now more viable based on your play style with 
some beefy stat boosts. 60 points have been allocated per costume. Please check the read me file in the folder within for a better 
explanation to the new patch. This does NOT replace the base game, as it's an optional patch and you can even revert the changes at any 
time. We just wanted to give a new outlook and some options for most of the costumes to see use and to make you feel like unlocking them 
was more worth it. The stats may change at a later date, as well as we release a "do it yourself" method to customize the stats to your 
own liking, further adding to the gameplay value, but for now, please enjoy :P (Note: The stats will also show up changed if you're 
using the lua script in the Dressing Room dialogue for convenience).

11/15/20 - Version 0.9.4c

- Included a now pre-patched EX file that's immediately ready to play. I did this because of the various bug fixes for "disc 1" or the 
base T-Edition game that wouldn't be available otherwise. All you, the player, need to do now is apply the music fix and/or the new 
costume system ips patches if you choose to. The file is in semi-English (menus, items, etc), so it works for console, but if you're 
using the lua, the dialogue is fully translated. Some stuff is still a garbled mess but it's about 90-95% in English. Also as a note, 
there is a bug that's known (and mentioned now in the EX read me html) where Locke's Sky Pirate costume is not selectable when 
changing costumes at the Moogle NPC. This isn't something we can fix easily, so if you use to have this costume, make sure he's 
already in it or just simply pop over to disc 1 (the normal T-Edition file) and swap into it.

1/2/21 - Version 0.9.4d

- Happy New Year and Holidays, everyone, hopefully this year goes better for all of you. New to this update is an optional patch for 
Kefka's field and battle sprite, inserted by me and made by NAOKI. Using his design I hand edited the sprite files and inserted it, so 
if you want a more Amano-like looking Kefka, like how the rest of the cast looks, give it a try. Otherwise, just a few small fixes 
and such to the files, nothing worth noting.

1/17/21 - Version 0.9.4e

- I've added another sprite edit, this time for Locke. This edit made by myself is based off his Amano and Nomura artworks, with a few 
notes. Firstly, due to the color limitations on the field and battle screens, I had to change Locke's jacket design on the back. My 
original idea was a Phoenix (not part of either artwork), but due to no red/pink allowed for Locke on his base costume's palette in 
battle, I swapped the design (battle only) to what Nomura designed for him on his back for Dissidia. It actually also looks a bit like 
a floating eye from Amano's art of FF6 you see in some pieces and I like how it turned out. This is more so an easter egg, since in 
battle you'll only see it briefly if Locke is confused or partially if he's killed. This wasn't as easy to design as Kefka's sprite 
edit, and I redesigned it 3 times before I was happy with the result. I made this edit mostly because I wasn't a fan of Locke's base 
costume sprite and felt out of the entire cast it didn't really fit, especially with everyone going more Amano-style. This isn't a 
replacement, but an option if anyone wishes to use it. You can find it in the Optional Patches folder along with the Kefka sprite 
mentioned above. Enjoy!

2/5/21 - Version 0.9.5

- After a 2.5 year hiatus, Tsushiy has popped back and pushed an update to the mod, making it now 2.9.3 and 1.6.2 for EX in Japanese 
and we've gone ahead and updated the English version to 2.9.3/1.6.2 as well with all the changes added:

-A handful of bugs have been fixed, most of them things we've already corrected ourselves, as well as a few small changes to the game 
and 2 new features. All of the information can be found in the history.html file at the very bottom for a full rundown. The biggest 
stuff added is a color wheel patch, where you can see all your buffs/debuffs on a character now with the colors cycling through one 
another. 

-The other, which is available now, is a new default sprite for Setzer. You can preview it in the character.html file under his name. 
Despite it is official, I did go ahead and added his old sprite as an optional patch in the Optional Patches folder just in the event 
anyone prefers his old design.

- Along with the above, Locke's sprite was also modified *slightly*, as in a few dots here and there. 

- Various small updates to a few html files (the readme.html mostly, removing the glaring item bug info; fixed now in Japanese) and 
some various sprite pictures added to the FF6 T-Edition Used Images folder that Tsushiy added in or adjusted. Your save files from 
2.9.1/2 SHOULD work on 2.9.3/1.6.2, however make SURE you load a hard save and not a save state for safety.

2/7/21 - Version 0.9.5a

- The MSU-1 has been officially released! Please check the MSU-1 Setup folder here for a rundown on it. Everything you need to run 
and set it up is in there. Enjoy the full quality that Tsushiy intended for the songs! Big thank you to iwatchgamesometimes for her 
massive effort and code work to get this available!

3/12/21 - Version 0.9.5b

- Changed FakeDice to FixdDice.

- Corrected a glaring bug from 2.9.3 where if you opened a treasure chest and obtained an item with ID 256 or above, never opened 
the menu afterwards, went into a battle and won an item, you'd get an item that was garbage data. We originally figured this was 
just a rarely occurring bug and had no way to discern the reason to fix it or replicate it, however thanks to a streamer, we 
pinpointed the issue and resolved it. Much thanks to Good_Guy_JDP the streamer for finding it and then thank you to Mato aka 
Clyde Mandelin for the patch fix! This problem still persists in the Japanese version, as Tsushiy at the time of this writing was 
made aware of it but hasn't replied in a month now or offered a fix. I have included Mato's patch in the event anyone playing the 
Japanese version wants the fix themselves. It can be found in the optional patches folder. This will be removed if/when Tsushiy 
corrects it himself.

9/8/21 - Version 0.9.5c

- Thanks to SirNewtonFig, we've added a 4-Player Multitap feature, allowing you to play T-Edition with instead of 2 people 
controlling characters, 4 people now can, effectively 1 person per character if you'd like. This makes the game into a pseudo-mmo 
of sorts, creating more strategy and teamwork amongst friends. More information/details on how you can play with friends can be 
found in the new folder here, with the patch and a readme file. Enjoy! (This will also work on the Japanese version and I've gone 
ahead and posted it on Tsushiy's forums to let the Japanese side enjoy it as well.)

11/16/21 - Version 1.0a

At the time of writing, Mato has released his own patch for T-Edition, allowing for console/phone use, as well as another option 
for emulator if you prefer. I've gone ahead and removed our v7 version which was solely for consoles and some patches no longer 
needed. With this also, I've pushed the mod's version to 1.0 as our work is for the most part finished, but we will continue to 
make adjustments, bug fixes, and offer more quality of life changes down the road as we come upon it. Please either use our 
work or Mato's based on your preferences. Our optional patches will work for his version (especially MSU-1), and I've updated 
them in the Optional Patches folder to reflect that. For a link to his patch, check here: http://tomato.fobby.net/ff6-t-edition/

11/16/21 - Version 1.0b

I added the method to customize your own costume stats with read me instructions in the Optional Patches folder. I had originally 
intended to add this a while ago and forgot until a streamer had asked me if it was possible to self-edit them. So, here I am, 
doing a quick update with the step-by-step process to get you set up. Don't worry, if you think it's a hard process or beyond 
your skill, all you need to do is open a file in Notepad++, edit numbers to your desired amounts, save, load the file in 
SNES9x-rr's lua, it'll create your patch, patch the rom, done. Follow the instructions in the new read me and enjoy! Balance 
yourself or make yourselves Gods/Goddesses, either way, you have control of how strong or weak to make yourself now. Let's see 
some interesting builds :)

12/29/21 - Version 1.0c

Did a bunch of things recently. I went through the translation and cleaned up alot of the item names (such as MythrilK as just 
Mythril now or FlmeShld as Flame, etc, to make it look more cleaner and presentable) and other things, including the html files. 
The translation is now an ips file and MUCH easier to install/add on additional patches etc, as well as the lua file is now 
included for ease of set up. I also corrected the Setzer chocobo sprite issue which was using his old graphics, and while doing 
this I updated/tweaked my custom Locke sprite and updated his/Kefka's preview pictures in the optional patches folder.

1/16/22 - Version 1.0d

Fixed up a few things for both patches and the lua script below:

 - Item/Rage names in the EX patch were accidentally reverted to an older version prior to me fixing an issue months ago and I 
just caught it upon fixing another error. While doing this I cleaned up alot of what I could in our EX version's item list and 
everything now matches the names from the base patch/mod (names in EX were VERY old).

- Berserker Ring's icon was that of a bracelet, this has been fixed to be a ring now.

- Changed Attack to Fight, Dblcst to XMagic, GilTos to G.Toss, and SnowSt to Storm to clean up/fix the names even more.

- Merit Award's text on the equip menu originally said "Heavy" and now says AnyEqp. Gauntlet said TwoHnd and now says 2-Hand. 

- The Silence spell not showing if it missed now correctly does again in EX (this was fixed, but was reverted by mistake in an 
earlier update).

5/26/22 - Version 1.0e - 2.9.6 release

A new update is up. Tsushiy popped back again after almost 1.5 years and put out a new version (2.9.5 and 2.9.6). Mostly bug fixes, 
but some nice new changes as well. Too much to detail here, so read the history.html at the bottom for all the details. The one other 
change I had to make to the lua version was due to Tsushiy's code editing, for some odd reason any ring and ribbon icon for relics 
is breaking the inventory badly. I spent 3 hours and came up with a jury rigged fix that simply changes the icons to necklaces and 
helmets. Sorry for the confusion, but unless I find another method, this'll have to do for now. The game wasn't playable otherwise. 
Oddly, it didn't affect Mato's translation, so that's good.

I've for safety gone ahead and left v2.9.4 available until we can make sure 2.9.6 is stable and working. I did however remove my 
Locke and Kefka sprite edits, as Tsushiy has gone ahead and added them officially to the mod! (Kefka isn't mine, but was made off 
of NAOKI's work, I just punched it into the game.) I expect some minor fixes to happen, so keep a look out for any updates. Find me 
and the others over on the Discord channel (link at the top of the document) if you have any questions etc.

5/28/22 - Version 1.0f - 2.9.7 release

Tsushiy fixed a critical bug that was causing the game to crash during the Ifrit/Shiva battle, as well as possibly other issues. 
Once more, he mentions the game may still be unstable, as he didn't revert changes (he knows the issue) and instead just fixed it. 
Again I've gone ahead and left 2.9.4 up in the event 2.9.7 is also unstable. Another new addition, thanks to Laurel and Gens for 
the code work, are alternative default portraits for the cast. You can find them in the Optional Patches folder with previews. 
Enjoy!

6/13/22 - Version 1.0g - 2.9.7

So far this patch seems stable (minus the noted bugs) as a handful of people have played, including Tsushiy, and not run into any issues. 
Though for now, 2.9.4 will remain as a safety. This small update is just to fix a bug from the JP version. Gauntlet was under certain 
circumstances auto-equipping unobtained and character-restricted weapons and has now been fixed, thanks to an anon poster on Tsushiy's forums 
for giving us the coding solution.

6/18/22 - Version 1.0h - 2.9.7

Fixed a glaring issue that was causing the game to crash and delete save data anytime a Regen tick happened. Only affected the lua version. 
Currently, Locke, Cyan, Shadow, and Edgar's default job titles will be garbage. This can be fixed but for the meantime, I wanted a quick 
solution out asap. Ignore it otherwise, game should work fine until I can get it corrected.

6/19/22 - Version 1.0i - 2.9.7

The above job titles are now fixed.

7/14/22 - Unchanged

Added a lua bestiary and streamlined both lua files into one. Load up the new lua and in the main menu hit L, or during battle pause, hit L, 
and Y to see page 2 of data. Enjoy!

- A small bug has been found for 2.9.7. Any gravity effect (Cave-In via Dark Requiem, Gravity spell, etc) will cause the game to crash. 
Looking into it, so I've put up a temp patch in the meanwhile (4 job titles will be a mess but everything works).

11/24/22 - Version 1.0j - 3.0.3

SAVE DATA DOES NOT TRANSFER FROM 2.9 TO 3.0; YOU MUST START 3.0 FRESH!

I apologize for the late update for the lua version. I've been trying to make the new status menu screen look presentable, but it's as of now 
very sloppy and a mess. We will be fixing this up, but in the meanwhile I wanted to just release the update. Sorry again. Alot has been 
changed since 2.9.7, so please read the the update history html for a rundown. One change is the costume stats have been done away with and 
are now purely cosmetic. You can now use newly added Tab items ala Chrono Trigger/FF7 to increase your stats. In light of this, I have left 
2.9.7 available as a legacy download for those who want to experience the mod when it had the costume stats. The various html files and lua in
this download now apply for 3.0 only; if using 2.9.7 download the files here: 

https://www.mediafire.com/file/u1o65w6f6zva0be/FF6_T-Edition_English.rar/file

As another small thing I personally had made, I included a reproduction box art and label stickers. Find those in the new box art folder. I'm 
having a Super Famicom version made and will be added shortly. Feel free to print it off and made into a box via any repro box maker. I used 
this guy: 

https://www.boxmygames.com/product/1-request-it-box-enter-title/

Just put the front/back pics into the order details of your order: 

FRONT:

https://cdn.discordapp.com/attachments/635985966573813760/1039633233836523551/box_front.png

BACK:

https://cdn.discordapp.com/attachments/585180083984138240/1041384371564859462/box_back.png

And how it looks:

https://cdn.discordapp.com/attachments/635985966573813760/1041103079443017808/20221112_162827.jpg

https://cdn.discordapp.com/attachments/635985966573813760/1041103079757598731/20221112_162844.jpg

https://cdn.discordapp.com/attachments/635985966573813760/1041103080005050489/20221112_162915.jpg

11/24/22 - No change - 3.0.3

Updated EX only for a minor bug fix. When selecting costumes the game would crash. Also updated the lua with fixes that clean up the status 
menus that were newly added in 3.0, as well as fixing the garbled job titles.

11/28/22 - 11/24/22 - Version 1.0k - 3.0.3

Added elemental icons to replace the Fi Ic Th etc text that had replaced kanji.

12/4/22 - Version 1.0l - 3.0.4

A handful of bug fixes for both ips patches has been addressed. The nameless Cerberus, Gold Needle not working properly in EX, status menu 
oddities when checking a character's status on the party select screen, and a 2222222222 spam on the status screen briefly when you started a 
fresh game with no save data, as well as apparently more issues with costumes in EX and original status portraits being shown, has all been 
addressed. A few minor lua errors were also corrected, as well as incorrect steal results from certain enemies that somehow weren't fixed in 
our version (but were in Japanese).

12/8/22 - Version 1.0k - 3.0.5

A minor bug fix; Hi-Potion's animation during battle was not displaying properly.

3/17/23 - Unchanged

Added a new optional patch to fix up/make the costume menu sprites look better for 3.0+, but it can be used on 2.9.4 and 2.9.7 as well if 
using the Laurel_portraits patch (can use one or the other or both, Laurel's just changes the default costumes, as does what Tsushiy did 
for 3.0). This patch uses the style of what Laurel/Tsushiy did. Thanks to Gens for the hard work on adding these in!


Please use this translated material for whatever purpose. If you publish it somewhere or use it to translate the game data itself, please 
give credit where credit is due.

Most importantly, have fun and enjoy the game! And thank you to Tsushiy for making this behemoth of a mod!