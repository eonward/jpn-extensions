// https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/api-samples/contextMenus/basic/sample.js

// Copyright 2023 Google LLC
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

// A onclick callback function.
chrome.contextMenus.onClicked.addListener(lookup);

function lookup(data) {
    console.log('new query: ', data.selectionText);

    chrome.tabs.create(
        {
            url: 'https://ejje.weblio.jp/content/' + data.selectionText
        }
    )
}

chrome.runtime.onInstalled.addListener(function () {
    // Create one test item for each context type.
    let contexts = ['selection'];

    let context = contexts[0];
    let title = "Weblio search";
    let id = context

    chrome.contextMenus.create({
        title: title,
        contexts: [context],
        id
    });
});
