/**
 * Job observer
 * @class JobPostings
 */
class JobPostings {
  /**
   * Class constructor
   */
  constructor() {
    this.observers = [];
  }

  /**
   * Add observer to list of observers
   * @param {Object} observer object that will added to the list of observers
   */
  subscribe(observer) {
    this.observers.push(observer);
  }

  /**
   * Remove observer from list of observers
   * @param {Object} observer object that will be deleted from the list of observers
   */
  remove(observer) {
    const observerIndex = this.observers.findIndex(obs => {
      return obs === observer;
    });

    if (observerIndex != -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  /**
   * Notify each observer about new job
   * @param {Object} newJob
   */
  notify(newJob) {
    this.observers.forEach(observer => {
      observer.gotNewJob(newJob);
    });
  }

  /**
   * Create new job
   * @param {Object} job
   */

  addJob(job) {
    this.notify(job);
  }
}

module.exports = JobPostings;
