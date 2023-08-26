package com.dsv.radaptive.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dsv.radaptive.model.CandidateModel;
import com.dsv.radaptive.service.CandidateService;

@RestController
@RequestMapping("/candidate")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CandidateController {

    private final CandidateService candidateService;

    public CandidateController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @PostMapping
    public ResponseEntity<CandidateModel> createUser(@Valid @RequestBody CandidateModel candidateModel) {
        return candidateService.createCandidate(candidateModel);
    }

    @GetMapping
    public ResponseEntity<List<CandidateModel>> getCandidate() {
        return candidateService.getCandidate();
    }

    // get by id
    @GetMapping("/{id}")
    public ResponseEntity<CandidateModel> getCandidateById(@PathVariable Long id) {
        return candidateService.getCandidateById(id);
    }
    



    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationException(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error ->
                errors.put(error.getField(), error.getDefaultMessage()));

        return ResponseEntity.badRequest().body(errors);
    }
}
