import random

random.setstate(state)

# bearer:expected python_lang_weak_random
range = random.randrange(100)

rng = random.Random()
rng.setstate(state)

# bearer:expected python_lang_weak_random
range = rng.randrange(100)