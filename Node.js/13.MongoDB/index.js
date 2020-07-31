const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log('Error occured', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: 'Node.js Course',
        author: 'Mosh',
        tags: ['node', 'backend'],
        isPublished: true
    });

    const result = await course.save();
}

// createCourse();

async function getCourses(){
    // eq (equal)
    // ne (not equal)
    // gt (greater)
    // gte (greater than or equal)
    // lt (less than)
    // lte (less than or equal)
    // in
    // nin (not in)
    //
    // or
    // and

    const courses = await Course
        .find({ author: 'Mosh', isPublished: true})

        // Comparison operator
        //.find(price: {$gt: 10, $lte: 20})
        //.find({ price: { $in: [10, 15, 20] }})
        //.find({ author: 'Mosh', isPublished: true})
    
        // Or operator
        //.find()
        //.or([ { author: 'Mosh' }, { isPublished: true } ])

        // Regex
        //.find({ author: /^Mosh/ })
        //.find({ author: /Mosh$/ })
        //.find({ author: /.*Mosh.*/ })

        .limit(10)
        .sort({name: 1})
        .select({ name: 1, tags: 1 })
        //.count()
        .lean();
    
    console.log(courses);
}

async function updateCourse_1(id){
    // Approach: Query First
    // findById()
    // Modify its properties
    // save()
    
    const course = await Course.findById(id);
    if (!course) return;
    course.isPublished = true;
    course.author = 'Another author';

    course.set({
        isPublished: true,
        author: 'Another Author'
    });

    const result = await course.save();
}

async function updateCourse_2(id){
    // Approach: Update first
    const result = await Course.update({ _id: id }, {
        $set: {
            author: 'Mosh',
            isPublished: false
        }
    });
    console.log(result);
}

async function removeCourse(id){
    //const result = await Course.deleteOne({ _id: id });
    //const result = await Course.deleteMany({ _id: id });
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
    //console.log(result);
}

removeCourse('5ee54c4b68436207c6a09587')
