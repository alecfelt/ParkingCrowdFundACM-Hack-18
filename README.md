### Instructions###
```bash
npm run dev
```
```bash
navigate to localhost:3000 in your browser
```

### TicketPool###
Contributors : Alec Felt, Sean Bell, Samir Shingane

### Concept:###

TicketPool is an alternative for purchasing a parking permit at UCSC. It is aimed towards the students who don't necessarily drive to campus on a 
daily basis and risk the occasional parking ticket instead of purchasing a $600+ permit. By signing up with the service you commit to a quarter 
long contract in which you pay a small part of your ticket and the rest is crowd funded. It's an insurance policy for parking on campus without a 
parking permit.

### Design:###

When the user first arrives at the site, they are greeted with a Welcome page. If they have already created an account, they can simply log in. If
they are new to the serivice, they register using their email. Once in the site, they see a map, which displays where other users have recieved 
citations, as well as parking enforcement has been spotted. Above the map, the user can fill out information about any citations they may have 
gotten, and place the location of the citation on the map. 

### Implementation:###

Our website uses Firebase's API to authenticate users, and is designed in Javascript. The site uses the Google Maps API to show the locations of 
citations and parking enforcement officers on the map. 

### Initial/Future Goals:###

When a user submits a ticket to be crowd funded, all members receive a small charge to help pay for the ticket. If the user consistently receives 
one or fewer tickets a quarter, the rate they will pay on other user's tickets will go down, and vice versa. We intended TicketPool to be a
membership service that would require a quarter long commitment, and would require the user to add a payment method during the creation of their 
account. Joining in mid quarter would be allowed, and the initial cost would be reduced accordingly. Every time any user recieves a ticket during a 
single quarter, the percentage of the ticket they have to pay goes up. We planned the first ticket a user recives to be fully crowdsourced, the 
second ticket to be 90% covered, the third ticket would be 75% covered, and the fourth ticket would be 50% covered. If a user exceeds four tickets 
in a quarter, their ability to have their tickets crowd funded will be revoked. However, they will still be allowed to have access to the map and 
the parking enforcement warnings. They will also still have to chip in on other user's fines. We planned to cycle the users who pay for the others' 
tickets, with those who have more tickets paying more often. 
