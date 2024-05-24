## Project Setup

1) run -> npm install


2) Create .env.local and create these Variables in this file
NEXT_PUBLIC_REST_PLUGIN_API_ENDPOINT={replace api endpoint}
NEXT_PUBLIC_REST_PLUGIN_API_KEY={replace api key}

Question:
Where can we find the API endpoint and API key?

Answer:
Upload the WordPress plugin and activate it. After activation, you can see the Rest API Settings tab in your WordPress sidebar. Navigate to it, and you will find both the key and endpoint there.

Note:
The form will not function if the .env.local variables are not configured correctly or are incorrect.


3) 
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Loom Guide
https://www.loom.com/share/0bb9e54e1fae4e1fa14bed6d33100a24?sid=c178bf08-6ca7-42f2-adeb-5eb3861b0797


## Challenging Part

The challenging part was embedding a YouTube video that should be played using our controls. When I tried to embed the video directly from YouTube, YouTube's default controls were visible, which was contrary to our design. So, I downloaded the video, uploaded it to my server, and then embedded it. This allowed me to control the play and stop functions of the video.

