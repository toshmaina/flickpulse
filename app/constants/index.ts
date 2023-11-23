export const API_BASE_URL: string = "http://localhost:3000/api";
   export  const question: string = "What is FlickPulse?";
export const answer: string = "FlickPulse is a streaming service that offers a wide variety of award-winning TV shows, movies, anime,documentaries, and more on thousands of internet-connected devices."
export const question2: string = "How much does FlickPulse cost"
export const answer2: string = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Ksh 200 to Ksh 1,100 a month. No extra costs, no contracts."
export const question3: string = "Where can I watch?";
export const answer3: string = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app."

export const question4 : string = "Where do I watch ?"
export const answer4: string = "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.";

export const question5: string = "What can i watch on FlickPulse ? ";
export const answer5: string = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.";
export const question6 : string = "Where do I watch ?"
export const answer6: string = "The FlickPulse Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."



interface FootLinks {
   title: string;
   links: {
      name: string;
      link: string;
   }[];
}
export const footerLinks:FootLinks[]= [
    {
        title: "Have a question ? ",
        links: [
            { name: "FAQs", link: "/products" },
            { name: "Investor  relations ", link: "/products" },
            { name: "Privacy", link: "/products" },
            { name: "Speed test", link: "/products" },
            
        ],
    },
    {
        title: "Help",
        links: [
            { name: "Jobs", link: "/" },
            { name: "Cookie References", link: "/" },
            { name: "Notices", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@flickpulse.com", link: "mailto:mainajames16972@gmail.com" },
            { name: "+254796628035", link: "tel:+254796628035" },
        ],
    },
];