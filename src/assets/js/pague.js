const stories = document.querySelectorAll('.imgBox button');
stories.forEach(story => {
    story.addEventListener('click', e => {
        stories.forEach(s => { s.classList.remove('active') });

        if (story.querySelector('.profile').classList.contains('empty')) return false;
        story.classList.add('active');
    });
});