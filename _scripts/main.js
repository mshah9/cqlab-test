document.addEventListener('DOMContentLoaded', function() {
    const truncateText = document.querySelector('.truncate-text');
    const showMoreBtn = document.createElement('span');
    showMoreBtn.classList.add('show-more-btn');
    showMoreBtn.textContent = 'Show More';
  
    truncateText.parentNode.insertBefore(showMoreBtn, truncateText.nextSibling);
  
    showMoreBtn.addEventListener('click', function() {
      truncateText.classList.toggle('expanded');
      showMoreBtn.textContent = truncateText.classList.contains('expanded') ? 'Show Less' : 'Show More';
    });
  });