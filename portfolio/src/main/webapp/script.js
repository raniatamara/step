// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random fact to the page.
 */
function addRandomFact() {
  const facts =
      [
          'I love K-pop', 
          'I  hate snakes', 
          'Kdrama has been my go-to in this quarantine', 
          'people I know in Google are nice!',
          'I don\'t know much about front-end, mostly because I imagine that I have to design stuffs', 
          'I dont like working from home', 
          'Hate to miss the Google office experience :(, hope I can visit the office in the future' 
      ];

  // Pick a random fact.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}

function getKdramaRecommendation() {
  const recommendations =
      [
          {
              title:"Crash Landing On You",
              cover:"/images/kdrama/cloy.jpg",
              link:"http://asianwiki.com/Crash_Landing_on_You"
          },
          {
              title:"Goblin",
              cover:"/images/kdrama/goblin.jpg",
              link:"http://asianwiki.com/Guardian:_The_Lonely_and_Great_God"
          },
          {
              title:"Itaewon Class",
              cover:"/images/kdrama/itaewon-class.jpg",
              link:"http://asianwiki.com/Itaewon_Class"
          },
          {
              title:"Extracurricular",
              cover:"/images/kdrama/extracurricular.jpg",
              link:"http://asianwiki.com/Extracurricular"
          },
          {
              title:"Hospital Playlist",
              cover:"/images/kdrama/hospital-playlist.jpg",
              link:"http://asianwiki.com/Hospital_Playlist"
          }
      ];

  // Get a K-drama series recommendation.
  const recommendation = recommendations[Math.floor(Math.random() * recommendations.length)];

  // Add it to the page.
  document.getElementById("kdrama-cover").src = recommendation.cover;
  document.getElementById("kdrama-title").innerText = recommendation.title;
  document.getElementById("kdrama-title").href = recommendation.link;
}
