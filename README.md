# PvP Princess Discord Bot 

This bot was created for the PvP Princess server, but is open source. Anyone is welcome to fork, run their own version, etc. as long as you credit this repo (also give a star please). If you want the bot for your own server, contact @shubawu on discord.

## Commands

Currently, the bot only takes commands as !\[command]

### **!help** 

Provides a list of bot commands with basic syntax. *more information found in this README* 

### **!job \[params]** 

Returns a random job from a pool. \[params] is **optional** and if ommitted returns from a pool of 19/19 jobs (excluding BLU)  
Adding \[params] adds jobs to a custom pool to be selected from instead  
\[params] is **CASE INSENSITIVE** can be formatted as  
    (job)/(job)/...             *i.e. war/blm*  
    (category)/(category)/...   *i.e. tank/healer*   
or combination of both            
    (job)/(category)/...        *i.e. pld/healer/blm/mch*  
the number of params can vary from *minimum* one and any number past that  

**categories:**  
    tank: pld, war, drk, gnb   
    healer: whm, sch, ast, sge  
    dps: mnk, drg, nin, sam, rpr, brd, mch, dnc, blm, smn, rdm  
    melee: mnk, drg, nin, sam, rpr  
    ranged: brd, mch, dnc  
    caster: blm, sam, rdm  

*It is important to note that the custom pool can be weighted to favor the chances of certain jobs*
*\(i.e pld/tank/blm will have a pool of \[pld, pld, war, drk, gnb, blm], here 'pld' has double the chance of being selected)*
*That is intentional, just keep that in mind when using*

### **!forecast \[date]**   

Returns an embedded message with the Frontline Schedule (Shatter, Onsal, Seal Rock) with timestamps. \[date] is **optional**.  
The daily Frontline Map changes on a rotation that resets at **midnight (00:00 or 12:00 AM) in Japan**  
It works by using an 'anchor date' as a reference point and doing Date math.    *The anchor date is 2024-04-21 00:00:00 +0900 (Shatter)*  

With no \[date] it uses the current as a 'target'  
With a \[date] it targets that day as a 'target' and gives the Frontline maps in the future  
\[date] is formatted as **DD/MM/YY** and is calculated in CST \(-0500 GMT) *this leads to a small variance between users*  
Because of the way the Date() Object works in Javascript, it (trivially) limits the range of values to only dates after the anchor date.  