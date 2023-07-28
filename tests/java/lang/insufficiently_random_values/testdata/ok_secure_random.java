import java.security.SecureRandom;

public class Main
{
	public static void main(String[] args) throws NoSuchAlgorithmException, NoSuchProviderException
	{
		SecureRandom secureRandomGenerator = SecureRandom.getInstance("SHA1PRNG", "SUN");

		// Get 128 random bytes
		byte[] randomBytes = new byte[128];
		secureRandomGenerator.nextBytes(randomBytes);

		// Get random integer
		int r = secureRandomGenerator.nextInt();

		// Get random integer in range
		int randInRange = secureRandomGenerator.nextInt(999999);

		// sneaky example
		java.util.Random numGen = java.security.SecureRandom.getInstance("SHA1PRNG");
    double rand = getNextNumber(numGen);
    String key = Double.toString(rand).substring(2);
	}

  double getNextNumber(java.util.Random generator) {
    return generator.nextDouble();
  }
}