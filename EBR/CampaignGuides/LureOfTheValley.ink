VAR day = 1
VAR searchLunn = 0
VAR searchKasende = 0
VAR biscuitDelivery = 0

Cresting the gentle, grassy hill, you see the unmistakable silhouette of Lone Tree Station rise out of the highland plains before you.

Lone Tree Station is aptly named. The single massive giga-redwood towers above the hills and swaying grass that surround it. You can just make out the eaves and balconies among the gnarled bark, doors tucked into winding roots, and hanging gardens suspended from branches.

As you draw closer, a woman in a freshly pressed cloak steps out from the main entrance and waves. Calypsa, your mentor for the past nine months, strides towards you with a man who looks just about your age at her heels.

"Hallo!" she calls out. "You made it! Just look at you!"

She clasps your hands, her smile warm and her grip firm. "I'm glad to finally have you here," she says. Then she turns. "This is Kal Iver. I trained Kal last year - right before I started training you."

Kal Iver gives you a nod in greeting. "A pleasure," he says.

Put the Lone Tree Station location into play in the surroundings. # instruction

Calypsa heads back to the station with you and Kal in tow. She speaks back over her shoulder. "Please, make yourselves at home. Explore the hanging gardens. Find Spirit Speaker Nal and Kordo, and strike up a conversation. Get to know the place."

"..."

Kal grins at you in a way that you can't quite describe as a sneer. "Handing out baked goods? I think that's perfectly suited to their abilities," he says.

+ [Tell Kal what he can do with his condescending attitude.]
    -> stood_up_to_kal ->
+ [Ignore him.]
    -> impressed_calypsa ->
    
    
- Gain the BISCUIT DELIVERY mission. (Put its card into play in the surroundings.) # instruction
~ biscuitDelivery = 1
Check the campaign tracker for the current day (day 1). Put the corresponding weather card (A Perfect Day) into play. # instruction
Calypsa turns to you. "Kal and I are heading out into the Valley. We'll be on shadow patrol. That is, we'll never be too far away from you for the next few weeks."
"You shouldn't need our help, of course," Kal says. "I can tell by looking at you that you're more than capable."
"Farewell for now," Calypsa says and she starts down the eastern path away from Lone Tree. "Spirits guide you. Follow you instinct!"
She and Kal walk steadily out of sight.

Explore Lone Tree Station to find Hy Pimpot, retrieve the juniper biscuits, and learn what to do next. # instruction # important
Create the path deck by shuffling together the Woods and Lone Tree card sets (seventeen cards in total). Place it above the surroundings. # instruction
Then, complete all initial setup by performing the setup steps on the back of the Lone Tree location card and placing three cloud tokens on the A Perfect Day weather card. # instruction
That concludes setup. You're ready to play. Now go explore Lone Tree Station, and find Hy Pimpot!

->END

=== stood_up_to_kal ===
Calypsa glares."Recall the wisdom of our ancestors," she says. "Treat each other with kindness." On "kind" she punches you on the shoulder. On "-ness," she punches Kal's.
STOOD UP TO KAL was added to your campaign tracker. # instruction
->->

=== impressed_calypsa ===
Calypsa shakes her head and laughs. "Oh, Kal. You're not long past delivering biscuits yourself. It's tradition after all."
IMPRESSED CALYPSA was added to your campaign tracker. # instruction
->->

=== A1x01 ===
Hy Pimpot places the last juniper biscuit into the basket and hands it to you. "There's no better way to begin a friendship than with a freshly baked biscuit," he says. "The people of White Sky just love meeting new Rangers. They always come bearing treats!" Hy Pimpot winks and takes a biscuit for himself.
you shoulder the basket and walk down the trail toward White Sky. As you do, the enticing aroma of the biscuits wafts up from the basket. You remember that you haven't eaten anything since breakfast. Your stomach growls. Surely they won't miss one or two.
Flip the BISCUIT DELIVERY mission to the BISCUIT BASKET side. Then choose a ranger to equip it. # instruction
->END

=== A4 ===
The hike through the dark and gloomy woods has taken you hours, but you finally reach the Northern Outpost.
{
    - fixed_up_northern_outpost:
        You can see the evidence of your previous work. The forest no longer encroaches on the building and you can get a clear picture of the surroundings.
        The lead ranger may scout 2 path cards. # instruction
        However, Lunn's clutter has already begun to build back up. You could help him tidy up, but you imagine the rewards wouldn't be as great this time around.
    - else:
        Scraps of wood, cloth, leather, and paneling lie scattered about the exterior. After long years of neglect, the forest around seems to press in on the outpost from all sides.
        Search the Northern Outpost set for The Deep Woods, and put it into play. # instruction
}

{ searchLunn == 0 } -> search_for_lunn
->END

=== search_for_lunn ===
You find a note tacked to the door. It reads: "I went to go investigate a strange presence in the forest. Be back by full moon. If I'm not, I'm probably in trouble! - Lun."
You step inside, but it's deserted. The note said Lunn should have been back days ago. Sounds like he probably needs help.

+ [Look for Lunn. (Only if you don't have another Search or Rescue mission)]
    ~ searchLunn = 1
    Gain the SEARCH (LUNN) mission. Record 94.7 three days from now on the campaign tracker. # instruction 
+ [Not today.]
    Record 94.7 three days from now on the campaign tracker. Do not add Lunn to the path deck. # instruction
- ->END

=== A4x1 ===
{
    - fixed_up_northern_outpost:
        After a few hours of tidying, scrubbing, and general fixing, the outpost is back in some semblance of working order... for now. You breathe a sigh of relief at a job well done.
        Each Ranger soothes 3 fatigue. # instruction
    - else:
        ->fixed_up_northern_outpost-> 
        It takes hours of hacking back overgrowth and scrubbing the floor to get the outpost back in working order. You breathe a sigh of relief at a job well done. Future visitors to this outpost will have a much easier time reaching the structure now.
        Each Ranger soothes 3 fatigue. Discard the Deep Woods if it's in play. # instruction
        FIXED UP THE NORTHERN OUTPOST was added to your campaign tracker. # instruction
}
->END

=== fixed_up_northern_outpost ===
->->

=== A2 ===
Visible for miles around, Lone Tree is a single enormous giga-redwood rising out of th thick grass of a high priarie. From far away, the tree is all you can see, but as you come closer, you can see the rest of the station: 
->END

=== A5 ===
Is Silaro Mako in play? # instruction
+ [Yes.]
    -> A53x6
+ [No.]
    Rising out of an island in the middle of the Silverfin, thie first thing you spot is the landmark that gives the town its name.. A massive gray spire at the center of the island towers over the cottages, workshops, and tradde halls that make up the rest of the town. As impressive as it is, you know that it is but a portrusion of the ancient arcology that extends deep into the roots of the Valley.
    ->END
    
=== A6 ===
Is Silaro Mako in play? # instruction
+ [Yes.]
    -> A53x6
+ [No.]
    The town of Branch spreads out among the trunks and branches of the giant cedar trees and tough, wrinkled dolewoods. The whole village is a maze of platform and narrow walkways, all created from three branches encouraged to grow together into dense mats punctuated by spherical homes.
    ->END
    
=== A53x6 ===
->END

