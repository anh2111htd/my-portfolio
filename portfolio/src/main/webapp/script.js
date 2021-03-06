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
 * Adds comments from /data to the page.
 */
function getComments() {
  fetch("/data")
    .then((response) => response.json())
    .then((comments) => {
      document.getElementById("notes-container").innerHTML = `${comments
        .map(
          (comment) =>
            `<p>${comment.comment}</p>${
              comment.imageURL
                ? `<img src="${comment.imageURL}" alt="Image for 
${comment.comment}">`
                : ""
            }`
        )
        .join("")}`;
    });
}

// Fetches Blobstore URL for form action to faciliate upload of images
function getBlobstoreURL() {
  fetch("/blobstore-upload-url")
    .then((response) => {
      return response.text();
    })
    .then((imageUploadUrl) => {
      const commentForm = document.getElementById("comment-form");
      commentForm.action = imageUploadUrl;
    });
}

getBlobstoreURL();
getComments();
function getGreeting() {
  fetch("/data")
    .then((response) => response.text())
    .then((greeting) => {
      document.getElementById("greeting-container").innerText = greeting;
    });
}

getGreeting();
function addProjectSection() {
  const projects = [
    {
      url: "https://cs2103jan2018-w11-b3.github.io/main/team/anh2111.html",
      imageLink: "images/infinitybook.png",
      description: "​An address book application for Tech recruiters.",
    },
    {
      imageLink: "images/insigniaapp.jpg",
      description:
        "A mobile app for event attendees to turn for the agenda, profiles, and to connect with others.",
    },
    {
      imageLink: "images/insigniahiring.png",
      description:
        "Landing page and quiz web app for Insignia's tech hiring program.",
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.minpairs",
      imageLink: "images/minpairs.png",
      description:
        "An Android app to help improve English listening with minimal pairs.",
    },
    {
      url: "https://play.google.com/store/apps/details?id=com.pcards",
      imageLink: "images/pcards.png",
      description:
        "An Android app to help learn English phonetics with flashcards.",
    },
    {
      url:
        "https://drive.google.com/file/d/1Tpoese8_Yxvl2PrHPCIOIcXZ1mnbGYnB/view?usp=drive_open",
      imageLink: "images/zulip.png",
      description: "Proposal to improve navigation in Zulip mobile app.",
    },
    {
      url: "https://trydesignlab.com/course/submissions/view/651c9886/",
      imageLink: "images/danang.png",
      description:
        "Tourist site for Da Nang, my final project in Design 101 course.",
    },
    {
      imageLink: "images/estanoche.png",
      description: "Materials I designed for Esta Noche concert.",
    },
  ];

  const projectHTML = projects
    .map(
      (project, index) => `
        <div class="div${index + 1}">
            <div class="project-container">
                ${
                  project.url
                    ? `<a  href="${project.url}" target="_blank">`
                    : ""
                }
                    <img class="project-image" src="${
                      project.imageLink
                    }" alt="${project.imageLink.split(".")[0]}">
                    <div class="overlay">
                        <p class="project-description">${
                          project.description
                        }</div>
                    </div>
                ${project.url ? `</a>` : ""}
            </div>           
        </div>
    `
    )
    .join("");
  document.getElementById("content").innerHTML =
    projectHTML + document.getElementById("content").innerHTML;
}

addProjectSection();
