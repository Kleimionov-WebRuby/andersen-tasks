class JobPost {
  constructor(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }
}

class JobPostings {
  constructor() {
    // Creating empty array with observers for storing our subscribers
    this.observers = [];
  }

  // Method for subscribe our job seekers
  subscribe(observer) {
    this.observers.push(observer);
  }

  // Remove an observer from this.observers.
  remove(observer) {
    const observerIndex = this.observers.findIndex(obs => {
      return obs === observer;
    });

    if (observerIndex != -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(newJob) {
    // If we have new job we called 'haveNewJob' for each observer
    this.observers.forEach(observer => {
      observer.haveNewJob(newJob);
    });
  }

  // When we create new job we called 'notify' method to send message about new job
  addJob(jobName) {
    this.notify(jobName);
  }
}

//  Class for seekers
class JobSeeker {
  constructor(name) {
    this.name = name;
  }

  // Method that notifies our seekers about new job
  haveNewJob(job) {
    console.log(`Hi ${this.name}. We've new job for you: ${job.getTitle()}`);
  }
}

// Create new Seekers
const seekerMark = new JobSeeker("Mark");
const seekerJoe = new JobSeeker("Joe");

const jobPostings = new JobPostings();

jobPostings.subscribe(seekerMark);
jobPostings.subscribe(seekerJoe);

const newJob = new JobPost("Full stack JS");

jobPostings.addJob(newJob);

// Hi Mark. We've new job for you: Full stack JS
// Hi Joe. We've new job for you: Full stack JS

jobPostings.remove(seekerJoe);

const newJob2 = new JobPost("Full stack JS and Java developer");

jobPostings.addJob(newJob2);

// Hi Mark. We've new job for you: Full stack JS and Java developer
