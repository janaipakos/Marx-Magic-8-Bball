//Pick random quote from list, split into quotation, author, and link, then AutoLink the link
$(document).ready(function() {
    createQuote();

    function createQuote() {
        var quotes = ["As Fanon said, it is the duty of each generation to discover its historic mission, " +
            "and fulfill or betray it. South Africa cannot afford more betrayal.\nChris Web\nhttps://www.jacobinmag.com/2015/12/south-africa-fees-must-fall-jacob-zuma-apartheid/",
            "The Spanish movement has already has shown its capacity to mutate. However its future script must be written " +
            "collectively through mass self-organization; not by Laclau, Mouffe, or any other enlightened " +
            "individual.\nJohn Candy\nhttps://www.jacobinmag.com/2015/12/podemos-iglesias-elections-ciudananos-cup-spain/",
            "Let us not forget also that the Arab region is not on another planet. It is part of the global setting, " +
            "and very close to Europe. Thus, the development of the radical left in Europe can also have an important " +
            "influence on the development of its equivalent in the Arab region. " +
            "\nGilbert Achcar\nhttps://www.jacobinmag.com/2015/12/achchar-arab-spring-tunisia-egypt-isis-isil-assad-syria-revolution/",
            "Fantasies of a Lula moment will lead to yet another lost opportunity in a country desperately " +
            "in need of a real political alternative to the ANC. \nBenjamin Fogel\nhttps://www.jacobinmag.com/2015/12/south-africa-zuma-anc-mandela-sacp-cosatu-numsa/",
            "Faced wth the charge of technophobia, we must remember that the fight against Uber is a fight for a technology " +
            "that could be used to distribute work more equally and foster genuine cooperation. That fight, I hope, " +
            "won't be misremembered in some dystopian twenty-third century capitalism. Though I'm sure the Luddites " +
            "would have had the same hopes of us.\nMichal Rozworski\nhttps://www.jacobinmag.com/2015/12/uber-sharing-economy-taskrabbit-silicon-valley-technology/",
            "Besides, we have already earned that general distribution of products and universal holiday that Paul Lafargue " +
            "talked about over a century ago. It's time to cash in. \nChris Maisano\nhttps://www.jacobinmag.com/2011/01/take-this-job-and-share-it/",
            "We loved the Zapatistas, because they were brave enough to make history after the end of History. \nBhaskar Sunkara\nhttps://www.jacobinmag.com/2011/01/why-we-loved-the-zapatistas/",
            "No one wants to read the words that will be the epitaph on the gravestone marking the burial site of your national imaginary. \nMax Ajl\nhttps://www.jacobinmag.com/2011/01/feel-good-zionism/",
            "Against the invidious politics of the work ethic, it's time to argue that some things should be granted to everyone, " +
            "simply by virtue of their humanity. Even hipsters. \nPeter Frase\nhttps://www.jacobinmag.com/2011/01/hipsters-food-stamps-and-the-politics-of-resentment/",
            "Out of the chaotic swirl of messages that emanated from Tahrir Square after January 25th, this is the one that Americans needed to" +
            "hear most of all: this is our revolution, and we neither want nor need your intervention either for or against us. \nPeter Frase\nhttps://www.jacobinmag.com",
            "With the UFW experience in mind, many labor observers now wonder what it will take, in the wake of Stern's departure last year, " +
            "to repair the latest union dreams shattered so badly in California and elsewhere. \nSteve Early\nhttps://www.jacobinmag.com/2011/03/beyond-the-fields/",
            "You would almost think Madison had been listening to Glenn Beck. \nSeth Ackerman\nhttps://www.jacobinmag.com/2011/03/burn-the-constitution/",
            "There is certainly a debate to be had about whether the apocalyptic warnings that climate hawks often use is an effective " +
            "way to rally support for the cause. But there is little doubt that, in this instance, " +
            "such rhetoric is completely legitimate. \nJake Blumgart\nhttps://www.jacobinmag.com/2011/03/lenny-bruce-is-not-afraid/",
            "Which doesn't mean defeatism. Just because the enemy is big does not mean we can't bring it down. \nMax Ajl\nhttps://www.jacobinmag.com",
            "But there is no genuine way forward that does not polarize class interests and galvanize a movement, and if there is a lesson to be taken from " +
            "the politics of the last few decades it is that there will be no sustainable gains that do not " +
            "fundamentally undermine wealth and its power. \nMike Beggs\nhttps://www.jacobinmag.com/2012/10/eric-hobsbawm-and-the-next-left/",
            "Lil B is the rapper who pushes the logic of social media production to its most surreal extremes. \nGavin Mueller\nhttps://www.jacobinmag.com/2011/03/based-and-superstructure/",
            "Kick away the American plutocracy's favorite ladder and watch a thousand flowers bloom. \nConnor Kilpatrick\nhttps://www.jacobinmag.com",
            "But Marx's work still provides, simultaneously, the only coherent critique of Enlightenment rationality with " +
            "the notion that the Enlightenment was, in fact, a good thing. \nJason Schulman\nhttps://www.jacobinmag.com/2011/03/in-defense-of-grand-narratives/",
            "And without mass radicalization within the working class, sooner or later the oppressive curtain of capitalist " +
            "realism will descend on us once again. \nSeth Ackerman\nhttps://www.jacobinmag.com",
            "\"The mainstream,\" writes Duncan Foley, \"dialectically produces its own negation.\" \nMike Beggs\nhttps://www.jacobinmag.com/2011/12/occupy-econ/",
            "Jobs was not the first to discover easily exploited laborers and exploit the living hell out of them; " +
            "he was just the first to paint computers white and have the gall to call it thinking differently. \nSarah Leonard\nhttps://www.jacobinmag.com",
            "Europe has managed twice in the last hundred years to drag the rest of the world down with it. It is about " +
            "to do it again, with Greece as a convenient scapegoat. \nYanis Varoufakis\nhttps://www.jacobinmag.com/2012/01/europes-greek-moment/",
            "This is the same criticism those holding out the promise of perpetual growth and industrial development as a " +
            "route to universal prosperity have been putting forward for over a century. And a century later, nothing has changed. " +
            "They're still wrong. \nMax Ajl\nhttps://www.jacobinmag.com",
            "With some knowledge of what lies at the end of each road, perhaps we will be better able to avoid setting off in the wrong direction. " +
            "\nPeter Frase\nhttps://www.jacobinmag.com/2011/12/four-futures/",
            "Not toward a libertarian market of perfect information, a fully articulated cybernetic network, but a " +
            "dictatorship of the 99 percent. \nMalcolm Harris\nhttps://www.jacobinmag.com/2011/12/hack-the-planet/",
            "Paradoxically enough, I hope these highly public and publicized protests are actually about the recreation of privacy. " +
            "\nRob Horning\nhttps://www.jacobinmag.com/2011/12/kooks/",
            "Go-go has fought this on multiple fronts. It speaks the language of struggle, even when it's using Beyoncé's lyrics. \nGavin Mueller\nhttps://www.jacobinmag.com",
            "Now, instead of saying \"our socioeconomic system is failing us,\" an entire generation of children will " +
            "learn to say, \"I have failed myself.\" \nMegan Erickson\nhttps://www.jacobinmag.com/2011/12/a-nation-of-little-lebowski-urban-achievers/",
            "And teachers -- real teachers, those who commit their lives (not two years) to expanding their students' imaginative " +
            "universes -- they are the heroes. I can hardly imagine a better inoculation against the hidden curriculum of liberal" +
            "do-gooders. \nAndrew Hartman\nhttps://www.jacobinmag.com/2011/12/teach-for-america/",
            "But for the crass realists who would say that this, alas, is the best of all possible worlds, a shift in " +
            "perspective would be a very good place to start. \nNick Serpe\nhttps://www.jacobinmag.com",
            "But ultimately, the most important thing is mitigation: we must de-carbonize our economy. \nChristian Parenti\nhttps://www.jacobinmag.com",
            "But the alternative is to change our view of what kind of work is socially valuable and to recognize that " +
            "what happens outside of wage labor -- work that sustains and reproduces all of us -- should be held in equal esteem. \nPeter Frase\nhttps://www.jacobinmag.com/2012/01/working-time-and-feminism/",
            "All of this can be done best if it is done with a constant focus on shifting the balance of common sense away " +
            "from the neoliberal pole, and in the process transforming the contents of mainstream social " +
            "democratic thinking in a leftist direction. \nRichard Seymour\nhttps://www.jacobinmag.com/2011/07/how-can-the-left-win/",
            "As undead Marxes go, I would rather have the kind of Marx in Joan Robinson\'s bones than either a Frankenstein " +
            "Marx pieced together from scraps of quotations, or a Zombie Marx, embalmed  in the 1860s and reanimated whole. " +
            "That is a spirit that might haunt again. \nMike Beggs\nhttps://www.jacobinmag.com/2011/07/zombie-marx/",
            "While, at the same time, precisely by dismantling bourgeois notions of authorship, the anonymous circumstances " +
            "for the reception of these paintings successfully realizes certain aspirations of the avant-garde, albeit through " +
            "a glitch in a particularly dystopian form of advanced capitalism. \nJeffrey Kirkwood\nhttps://www.jacobinmag.com",
            "In the case of the Bolsheviks, the combination led them to be up and doing. Just for this reason, the future, " +
            "for good or ill, belonged to the Bolsheviks. \nLars T. Lih\nhttps://www.jacobinmag.com/2014/07/the-lies-we-tell-about-lenin/",
            "The classical Leninist question \"what is to be done?\" is being asked with increasing urgency. Perhaps all of this " +
            "Lenin stuff has a future as well as a past. \nPaul Le Blanc\nhttps://www.jacobinmag.com",
            "The Left doesn't need to go green -- to save the planet and the people on it, it needs to go red. \nAlyssa Battistoni\nhttps://www.jacobinmag.com/2014/01/toward-cyborg-socialism/",
            "It\'s long past time workers responded with a rallying cry of our own. \nJay Monaco\nhttps://www.jacobinmag.com/2014/01/the-office-of-the-future/",
            "It hides the fact that if we acknowledged all of our work as work, we could set appropriate limits for it, " +
            "demanding fair compensation and humane schedules that allow for family and leisure time. And if we did that, " +
            "more of us could get around to doing what it is we really love. \nMiya Tokumitsu\nhttps://www.jacobinmag.com/2014/01/in-the-name-of-love/",
            "We must work tirelessly to ensure that history does not repeat itself in the genomics era. \nPankaj Mehta\nhttps://www.jacobinmag.com/2014/01/theres-a-gene-for-that/",
            "In 2014, the notion of a pan-regional struggle might seem utopian, but the events of the last few years confirm " +
            "its necessity -- and it is exactly this specter that has provoked such great concern in the corridors of " +
            "power in Washington, Riyadh, and Doha. \nAdam Hanieh\nhttps://www.jacobinmag.com/2014/01/a-petrodollar-and-a-dream/",
            "But allies? Hardly. The cop who rallies for collective bargaining today will be protecting Goldman Sachs tomorrow. " +
            "\nShawn Gude\nhttps://www.jacobinmag.com/2014/01/the-bad-kind-of-unionism/",
            "Public buildings and structures that are luxurious, dramatic, even excessive -- if hopefully less whimsical " +
            "and egotistical than those of Calatrava -- should be ours as a right, not as a reservation for the wealthy. " +
            "\nOwen Hatherley\nhttps://www.jacobinmag.com/2014/01/in-praise-of-white-elephants/",
            "The dual role of the US Executive will become increasingly fraught amid global volatility and historic levels " +
            "of domestic inequality. It\'s clear the ruling elite don't have the capacity or will to solve this crisis. " +
            "\nNicole Aschoff\nhttps://www.jacobinmag.com/2014/01/the-schizophrenic-state/",
            "Liberals should abandon the search for progressive outcomes through constitutional law. It\'s not too late -- " +
            "it's never too late -- to join in the search for a politics in which judicial interference with democracy " +
            "is not only unnecessary but unthinkable. \nRob Hunter\nhttps://www.jacobinmag.com/2014/06/waiting-for-scotus/",
            "But what is really utopian is the promise that a better life within capitalism is around the corner. The radical must " +
            "increasingly declare itself the practical. \nSam Gindin\nhttps://www.jacobinmag.com/2014/06/unmaking-global-capitalism/",
            "As the conditions of the publicist increasingly overlap with those of all knowledge workers, people in every profession " +
            "should recognize and confront the demands of affective labor as their own, rather than setting them up " +
            "in opposition to “real” work. \nJennifer Pan\nhttps://www.jacobinmag.com/2014/06/pink-collar/",
            "As long as it remains the consensus position for politicians, nonprofits, and developers alike, we will see no end " +
            "to the housing crisis. \nSamuel Stein\nhttps://www.jacobinmag.com/2014/10/de-blasios-doomed-housing-plan/",
            "They do, however, reinforce the logic of austerity and tax avoidance, strengthen the influence of the rich and " +
            "the capital markets over policy-making, and offer private interests yet another opportunity to enrich themselves at " +
            "public expense. There's always a market for that. \nChris Maisano\nhttps://www.jacobinmag.com/2014/10/friendly-fire/",
            "It's not individual capitalists; it's a structure. It's a structure of capitalism at the very top. " +
            "Finance capital is really hamstringing us. \nRichard Florida\nhttps://www.jacobinmag.com/2014/10/the-creativity-bubble/",
            "The public city is engaged in a life-and-death struggle against the private city, and it's time to identify " +
            "large-scale private property as the disease. Bombs away. \nMike Davis\nhttps://www.jacobinmag.com/2014/10/b-52-bomber-radicalism/",
            "Fans of the world, unite! You have nothing to lose but an obstructed view from the nosebleed section. " +
            "\nSean Dinces\nhttps://www.jacobinmag.com/2014/10/fanfare-without-the-fans/",
            "If we postpone any thought about architecture until a vague \'after the revolution,\' we ignore the fact that " +
            "socialist architects have often created glimpses of what a different society could be like. " +
            "\nOwen Hatherley\nhttps://www.jacobinmag.com/2014/10/imagining-the-socialist-city/",
            "Ultimately, overcoming entrenched interests will require the use of political force. If Chinese workers want " +
            "a right to the city, they will have to take it for themselves. \nEli Friedman\nhttps://www.jacobinmag.com/2014/10/the-urbanization-of-the-chinese-working-class/",
            "Exploitation, political disenfranchisement, lack of access to resources -- these are injustices universal to capitalism. " +
            "We must learn to confront them outside the familiar comforts of our cities. \nKaren Narefsky\nhttps://www.jacobinmag.com/2014/10/the-suburbanization-of-the-us-working-class/",
            "Safe Space recognizes that claiming the city as an equitable space for all will require a broader understanding " +
            "of identity, its use as a tool for development, and its latent potential as a site of resistance. " +
            "\nEric Peterson\nhttps://www.jacobinmag.com/2014/10/safe-space-for-capital/",
            "Rather, it is that we are simultaneously creators and consumers, and that we should strive for legal forms that keep us from " +
            "being exploited or manipulated in either role. \nPeter Frase\nhttps://www.jacobinmag.com/2013/09/property-and-theft/",
            "But while maintaining a disposable underclass may have permitted China\'s explosive economic growth, state and " +
            "capital may yet come to regret this model. A class with nothing to lose is a dangerous class indeed. " +
            "\nEli Friedman\nhttps://www.jacobinmag.com/2013/09/outside-the-new-china/",
            "But as a vision of capitalist society, mainstream economics is simply hollow at its core -- and the hollow place " +
            "has been filled up with a distorted bourgeois ideology that does nothing but impede our understanding of the social world. " +
            "\nSeth Ackerman\nhttps://www.jacobinmag.com/2013/09/dont-mention-the-war/",
            "Meanwhile,the feminist blogosphere remained silent on whether the women garment workers rioting for increased " +
            "wages and safer working conditions in the streets of Dhaka were \"feminists.\" \nJennifer Pan\nhttps://www.jacobinmag.com/2013/09/she-came-to-riot/",
            "What Hennessy's mixes suggest is that at the level of social reproduction, as with so much else, we haven't " +
            "really left the Reagan years. \nGavin Mueller\nhttps://www.jacobinmag.com/2013/09/silent-majority-music/",
            "When the first barista refuses the enforced gesture of happy-go-lucky largesse by their off-work co-worker, " +
            "then the whole stinking system will collapse in a mound of idiocy and be revealed for the indentured " +
            "servitude that it is. \nIan Svenonius\nhttps://www.jacobinmag.com/2013/09/against-tipping/",
            "But until they also correct for generations of cultural misogyny -- forging, perhaps, a path to also correct " +
            "for the ableisms, nationalisms, and racisms equally embedded in our legal code -- they should be dismissed as " +
            "tainted by a values system fostered under biased ip laws. \nAnne Elizabeth Moore\nhttps://www.jacobinmag.com/2013/09/degendering-value/",
            "The NSA scandal shows that freedoms are far more than legal phenomena, and that any successful pushback " +
            "against the creeping police state will have to be based more in politics than in law. " +
            "\nChase Madar\nhttps://www.jacobinmag.com/2013/09/edward-snowden-and-the-american-condition/",
            "With powerful class movements behind it, technology can promise emancipation from work, not more misery. " +
            "\nPaul Heideman\nhttps://www.jacobinmag.com/2015/04/braverman-gramsci-marx-technology",
            "New applications and mobile services for Palestinians are being called liberatory. But they're more a way for " +
            "capitalists to profit from occupation. \nHelga Tawil-Souri\nhttps://www.jacobinmag.com/2015/03/occupation-apps-souri-palestine",
            "Extraterrestrial economic justice -- not just shiny technological advances -- will be central to any truly " +
            "egalitarian politics in the twenty-first century. It's time to start building a democratic futurism. " +
            "\nNick Levine\nhttps://www.jacobinmag.com/2015/03/space-industry-extraction-levine/",
            "We have the power to contest and deny capital\'s gains, and we should. Perhaps our phones will come in handy along the way. " +
            "\nNicole M. Aschoff\nhttps://www.jacobinmag.com/2015/03/smartphone-usage-technology-aschoff/",
            "Education is not a design problem with a technical solution. It\'s a social and political project neoliberals want to innovate away. " +
            "\nMegan Erickson\nhttps://www.jacobinmag.com/2015/03/education-technology-gates-erickson",
            "3-D printing in its current form could be a return to “small is beautiful” drudgery, but it has the potential to revolutionize the way we produce goods. " +
            "\nGuy Rundle\nhttps://www.jacobinmag.com/2015/04/3d-printing-industrial-revolution-rundle",
            "The idea of socialism has been sidelined as pie-in-the-sky. But what is really utopian is the promise that a " +
            "better life within capitalism is around the corner. The radical must increasingly declare itself the practical. " +
            "\nSam Gindin\nhttps://www.jacobinmag.com/2014/06/unmaking-global-capitalism/"
        ];

        var autolinker = new Autolinker();
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        randomedQuote = randomQuote.split(/\n|\t/);
        var extractedQuote = [randomedQuote[0]].toString();

        $('.quotation').text(randomedQuote[0]);
        $('.author').text(randomedQuote[1]);
        document.getElementById("link").innerHTML = Autolinker.link(randomedQuote[2]);
        $(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + extractedQuote + '@jacobinmag');
    }

    //Marx Me button
    $(".createQuoteButton").on("click", function() {
        createQuote();
    });
});
