package trade.tracker.project.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TrackController {
	
	/*
	 * tells when ever there is an http request to this app
	 * to /hello use this entry point
	 */
	
	@RequestMapping("/hello")
	public String sayHi() {
		return "Hi";
	}
}
