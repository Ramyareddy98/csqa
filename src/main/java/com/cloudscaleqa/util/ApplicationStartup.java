package com.cloudscaleqa.util;

import java.util.Map;
import java.util.concurrent.LinkedBlockingQueue;

import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;


@Component
public class ApplicationStartup implements ApplicationListener<ContextRefreshedEvent> {
	final static Logger logger = LoggerFactory.getLogger(ApplicationStartup.class);


	public static final LinkedBlockingQueue<MimeMessage> emailQ = new LinkedBlockingQueue<MimeMessage>();
	public static final LinkedBlockingQueue<Map<String, String>> billQ = new LinkedBlockingQueue<Map<String, String>>();
	@Autowired
	public  JavaMailSender Mailsender;
	public static JavaMailSender sender;
	private SendEmail sendEmailThread = null;


	@Override
	public void onApplicationEvent(ContextRefreshedEvent arg0) {
		logger.info("in onApplicationEvent method");
	

		if ((sendEmailThread == null) || (!sendEmailThread.isAlive())) {
			sendEmailThread = new SendEmail();
			sendEmailThread.start();
			logger.info("sendEmailThread started");
		}

		if (null == sender) {
			sender=Mailsender;
			logger.info("JavaMailSenderImpl object created");
		}

	}

}
