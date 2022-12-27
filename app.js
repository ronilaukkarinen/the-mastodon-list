// When DOM is ready
addEventListener('DOMContentLoaded', () => {

  // Add anchors
  anchors.add();

  // Get last modified time of index.html
  const lastUpdated = document.lastModified;
  const lastUpdatedDate = moment(lastUpdated);

  // Save last updated time to local storage
  localStorage.setItem('finnish_mastodon_users_last_updated', lastUpdatedDate);

  const lastUpdatedElement = document.getElementById('updated');

  // Add last updated in textual format to element title attribute
  lastUpdatedElement.setAttribute('title', lastUpdatedDate.locale('en_US').format('LLLL'));

  // Last updated from now
  const lastUpdatedFromNow = lastUpdatedDate.fromNow();
  lastUpdatedElement.innerHTML = lastUpdatedFromNow;

});
