function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.courses = function() {
  //Return list of Courses
  return this.courses;
};

Student.prototype.enroll = function(course) {
  if (!course.students.includes(this)) {
    if (this.hasConflict(course)) {
      throw "Has a course conflict";
    }
    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.hasConflict = function(course) {
  for(let i = 0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(course)) {
      return true;
    }
  }
  return false;
};

Student.prototype.courseLoad = function() {
  let load = new Object();
  for (let i = 0; i < this.courses.length; i++) {
    if (load.this.courses[i].department === undefined) {
      load.this.courses[i].department = 0;
    }
    load.this.courses[i].department += this.courses[i].credits;
  }
  return load;
};

function Course(name, department, credits, days, block) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.block = block;
}

Course.prototype.students = function() {
  return this.students;
};

Course.prototype.addStudent = function(student) {
  this.students.push(student);
};

Course.prototype.conflictsWith = function(course) {
  for(let i = 0; i<this.days.length; i++) {
    if (course.days.includes(this.days[i]) && this.block === course.block) {
      return true;
    }
  }
  return false;
};
