const server = require('./server');
const JobPostings = require('./observer');
const JobPost = require('./job-post');
const JobSeeker = require('./job-seeker');

const jobPostings = new JobPostings();

server.start().then(() => {
  const seekerMark = new JobSeeker('Mark');
  const seekerJoe = new JobSeeker('Joe');

  jobPostings.subscribe(seekerMark);
  jobPostings.subscribe(seekerJoe);

  const newJob = new JobPost('Full stack JS');

  jobPostings.addJob(newJob);
  jobPostings.remove(seekerJoe);

  const newJob2 = new JobPost('Full stack JS and Java developer');

  jobPostings.addJob(newJob2);
});
