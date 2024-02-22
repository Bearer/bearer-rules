// bearer:expected java_lang_insufficiently_random_values
Random rand = new Random();
rand.next();

// bearer:expected java_lang_insufficiently_random_values
org.apache.commons.lang.RandomStringUtils.random(10);
// bearer:expected java_lang_insufficiently_random_values
RandomStringUtils.random(10);

// bearer:expected java_lang_insufficiently_random_values
org.apache.commons.lang.math.RandomUtils.nextint();
// bearer:expected java_lang_insufficiently_random_values
RandomUtils.nextint();

// bearer:expected java_lang_insufficiently_random_values
double v = java.lang.Math.random();
