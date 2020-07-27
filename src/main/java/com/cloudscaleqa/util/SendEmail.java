package com.cloudscaleqa.util;

import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class SendEmail extends Thread {
	final static Logger logger = LoggerFactory.getLogger(SendEmail.class);

	public void run() {
		while (true) {
			try {
				logger.info("in sendemail thread ");
				MimeMessage message = ApplicationStartup.emailQ.take();
				ApplicationStartup.sender.send(message);
				logger.info("email message sent");
			} catch (Exception ex) {
				logger.error("Error Sending Email", ex);
				ex.printStackTrace();
			}
		}
	}

}
